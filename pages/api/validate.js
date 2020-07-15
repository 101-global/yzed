import { firebaseAdmin } from '../../utilities/firebaseAdminSetup';

const validate = async (token) => {
  const decodedToken = await firebaseAdmin.auth().verifyIdToken(token, true);
  let userData;
  await firebaseAdmin
    .firestore()
    .collection('users')
    .doc(decodedToken.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData = { ...doc.data() };
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
  const user = await firebaseAdmin.auth().getUser(decodedToken.uid);
  const result = {
    user: {
      uid: user.uid,
      email: user.email,
      profilePicture: userData.profilePicture,
      firstName: userData.firstName,
      lastName: userData.lastName,
      emailVerified: user.email_verified,
      loggedIn: true,
    },
  };
  return result;
};

export default async (req, res) => {
  try {
    const { token } = JSON.parse(req.headers.authorization || '{}');
    if (!token) {
      return res.status(403).send({
        errorCode: 403,
        message: 'Auth token missing.',
      });
    }
    const result = await validate(token);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(err.code).send({
      errorCode: err.code,
      message: err.message,
    });
  }
};
