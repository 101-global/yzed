import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../utilities/context/UserContext';
import { FacebookLoginButton } from 'react-social-login-buttons';

const FbSignup = () => {
  const { requestFbSignup } = useContext(UserContext);
  return (
    <FacebookLoginButton
      onClick={() => {
        requestFbSignup();
      }}
    />
  );
};

export default FbSignup;
