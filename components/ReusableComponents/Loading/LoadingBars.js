import PropTypes from 'prop-types';
import React from 'react';
import theme from '../../../utilities/theme';

const LoadingBars = ({ color }) => {
  return (
    <>
      <div className='spinner-container flex min-h-screen flex-col items-center justify-center bg-black'>
        <div className='lds-facebook'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className='text-3xl font-semibold'>Loading...</h1>
      </div>
      <style jsx>
        {`
          .spinner-container {
            margin: 0 auto;
            text-align: center;
          }
          .lds-facebook {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
          }
          .lds-facebook div {
            display: inline-block;
            position: absolute;
            left: 8px;
            width: 16px;
            background: ${color ?? theme.colors.white};
            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
          }
          .lds-facebook div:nth-child(1) {
            left: 8px;
            animation-delay: -0.24s;
          }
          .lds-facebook div:nth-child(2) {
            left: 32px;
            animation-delay: -0.12s;
          }
          .lds-facebook div:nth-child(3) {
            left: 56px;
            animation-delay: 0;
          }
          h1 {
            color: ${color ?? theme.colors.white};
            font-family: ${theme.fonts.main};
            font-weight: 300;
            display: block;
          }
          @keyframes lds-facebook {
            0% {
              top: 8px;
              height: 64px;
            }
            50%,
            100% {
              top: 24px;
              height: 32px;
            }
          }
        `}
      </style>
    </>
  );
};

export default LoadingBars;

LoadingBars.propTypes = {
  color: PropTypes.string,
};