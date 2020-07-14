import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../utilities/context/UserContext';
import { GoogleLoginButton } from 'react-social-login-buttons';

const GoogleSignup = () => {
  const { requestGoogleSignup } = useContext(UserContext);
  return (
    <GoogleLoginButton
      onClick={() => {
        requestGoogleSignup();
      }}
    />
  );
};

export default GoogleSignup;
