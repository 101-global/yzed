import React, { useContext, useEffect, useState } from 'react';

import FormError from '../../ReusableComponents/Errors/FormError';

import Link from 'next/link';
import ReactTooltip from 'react-tooltip';
import { useRouter } from 'next/router';
import LoginLayout from '../LoginPage/LoginLayout';
import LoadingSpinner from '../../ReusableComponents/Loading/LoadingSpinner';
import { UserContext } from '../../../utilities/context/UserContext';
import { signupStates } from '../../../utilities/enums';
import { strongRegex } from '../../../utilities/validation';
import UserFormLayout from '../../ReusableComponents/Layouts/UserFormLayout';
import LoadingButtonDots from '../../ReusableComponents/Loading/LoadingButtonDots';
import theme from '../../../utilities/theme';
import GoogleLogin from '../../ReusableComponents/Buttons/GoogleLogin';
import FBLogin from '../../ReusableComponents/Buttons/FBLogin';
import InlineFormError from '../../ReusableComponents/Errors/InlineFormError';

const SignupForm = ({ user }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const {
    userError,
    userLoading,
    requestEmailSignup,
    requestGoogleSignup,
    requestFbSignup,
  } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/signup/success');
    }
  }, []);

  return (
    <UserFormLayout>
      <div className='grid grid-cols-1 mx-auto w-full'>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (password === confirmPassword && strongRegex.test(password)) {
              await requestEmailSignup(email, password, firstName, lastName);
            } else {
              setError('Check that password match and match the password criteria.');
            }
          }}
          className='flex flex-col justify-center items-center mx-auto'>
          <label className='login-input-label dark:text-lightGrey'>Name</label>
          <div className='grid grid-cols-2 gap-4'>
            <input
              aria-label='First Name'
              placeholder='First Name'
              id='firstName'
              name='First Name'
              required
              value={firstName}
              type='text'
              maxLength='18'
              className='login-input dark:border-white mb-8 inline-block'
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <input
              aria-label='Last Name'
              placeholder='Last Name'
              id='lastName'
              name='Last Name'
              required
              value={lastName}
              type='text'
              maxLength='18'
              className='login-input dark:border-white mb-8 inline-block'
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
          <label htmlFor='email' className='login-input-label dark:text-lightGrey'>
            Email
          </label>
          <InlineFormError
            error={userError}
            code='auth/email-already-in-use'
            message='There is already an account with this email'
          />
          <input
            id='email'
            name='email'
            required
            value={email}
            type='email'
            className='login-input dark:border-white mb-8'
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label htmlFor='password' className='login-input-label dark:text-lightGrey relative'>
            Password{' '}
            <div
              className='help-tip bg-aqua'
              data-tip='Password must contain at least one uppercase letter, lowercase letter, one number, and one symbol.'></div>
            <ReactTooltip />
          </label>
          <div className='password-message w-full text-left'>
            {password ? (
              strongRegex.test(password) ? (
                <p className='text-xxs text-success'>Password Strength OK.</p>
              ) : (
                <p className='text-xxs text-danger'>Password is not strong enough.</p>
              )
            ) : null}
          </div>
          <input
            id='password'
            name='password'
            required
            value={password}
            className='login-input dark:border-white mb-8'
            type='password'
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <label htmlFor='confirmPassword' className='login-input-label dark:text-lightGrey'>
            Confirm Password
          </label>
          <div className='password-message w-full text-left'>
            {confirmPassword ? (
              password === confirmPassword ? (
                <p className='text-xxs text-success'>Passwords Match.</p>
              ) : (
                <p className='text-xxs text-danger'>Passwords Do Not Match</p>
              )
            ) : null}
          </div>
          <input
            id='confirmPassword'
            name='password confirmation'
            required
            value={confirmPassword}
            className='login-input dark:border-white mb-8'
            type='password'
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <button
            disabled={
              !email.length ||
              !firstName.length ||
              !lastName.length ||
              !password.length ||
              password !== confirmPassword
            }
            className='filled-button-light dark:bg-white dark:text-black relative disabled:bg-grey'
            type='submit'
            required>
            {userLoading ? <LoadingButtonDots /> : 'SIGN UP'}
          </button>
        </form>
        <div className='py-12'>
          <GoogleLogin />
          <FBLogin />
        </div>
        <div className='y-12 pt-8 border-t-2 border-lightGrey'>
          <p className='text-center text-sm'>Already a member?</p>
          <Link href='/login'>
            <a className='mx-auto border-black dark:border-white border flex items-center justify-center rounded-md h-formButton w-formButton text-black dark:text-white bg-transparent text-center text-sm my-4'>
              Login to Account
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .filled-button-light:disabled {
          background: ${theme.colors.mediumGrey};
          color: ${theme.colors.white};
        }
        .grid-cols-1 {
          max-width: 400px;
        }
        input {
          border-radius: 0;
          -webkit-appearance: none;
        }
        form {
          max-width: 240px;
        }
        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: ${theme.colors.mediumGrey};
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: ${theme.colors.mediumGrey};
        }

        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: ${theme.colors.mediumGrey};
        }
        .password-message {
          min-height: 0.8rem;
        }
        .help-tip {
          position: absolute;
          top: 0px;
          right: 0px;
          text-align: center;
          background-color: ${theme.colors.mediumGrey};
          border-radius: 50%;
          width: 1rem;
          height: 1rem;
          font-size: 0.75rem;
          line-height: 1rem;
          cursor: default;
        }

        .help-tip:before {
          content: '?';
          font-weight: bold;
          color: #fff;
        }
      `}</style>
    </UserFormLayout>
  );
};

export default SignupForm;
