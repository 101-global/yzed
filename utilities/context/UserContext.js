import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import firebase from '../firebaseSetup';
import { useRouter } from 'next/router';

export const UserContext = React.createContext();

const dbh = firebase.firestore();

const defaultIcon =
  'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/account-icon.svg';

const initialUserState = {
  loggedIn: false,
  email: '',
  isVerified: false,
  username: '',
  profilePicture: defaultIcon,
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false });
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState(null);

  const router = useRouter();

  function onAuthStateChange(callback) {
    setUserLoading(true);
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        console.log('The user is logged in');
        await dbh
          .collection('users')
          .doc(user.uid)
          .get()
          .then(async (doc) => {
            callback({
              loggedIn: true,
              email: user.email,
              isVerified: user.emailVerified,
              username: doc.data().username,
              profilePicture: doc.data().profilePicture,
            });
          });
        setUserLoading(false);
      } else {
        console.log('The user is not logged in');
        callback({ loggedIn: false, email: '' });
        setUserLoading(false);
      }
    });
  }

  const signup = async (email, password, username, redirectPath) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        if (user) {
          await dbh
            .collection('users')
            .doc(user.user.uid)
            .set({
              email,
              username,
              profilePicture: defaultIcon,
            })
            .then(() => {
              router.push(redirectPath);
            })
            .catch((err) => setUserError(err.message));
        }
      })
      .catch((err) => setUserError(err.message));
  };

  const login = async (username, password, redirectPath) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => router.push(redirectPath))
      .catch((err) => setUserError(err.message));
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const requestSignup = useCallback((username, password, redirectCallback) => {
    signup(username, password, redirectCallback);
  });

  const requestLogin = useCallback((username, password, redirectCallback) => {
    login(username, password, redirectCallback);
  });

  const requestLogout = useCallback(() => {
    logout();
  });

  return (
    <UserContext.Provider
      value={{ user, userLoading, userError, requestSignup, requestLogin, requestLogout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
