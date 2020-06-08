import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import theme from '../../../utilities/theme';

const BrandFooter = ({ lightMode }) => {
  return (
    <>
      <div className='footer-container'>
        <p>
          <strong>YZED</strong> is part of{' '}
          <a href='https://www.101.global/?lang=en' target='_blank' rel='noopener noreferrer'>
            101Global
          </a>{' '}
          and powered by{' '}
          <a href='https://www.hanwha.com/en.html' target='_blank' rel='noopener noreferrer'>
            Hanwha
          </a>
        </p>
      </div>
      <style jsx>{`
        .footer-container {
          background-color: ${lightMode ? theme.colors.white : theme.colors.black};
        }

        p {
          padding: 10px 10%;
          color: ${lightMode ? theme.colors.black : theme.colors.white};
          font-weight: 100;
          margin: 0;
          font-size: 1rem;
        }
        a,
        strong {
          color: ${lightMode ? theme.colors.black : theme.colors.white};
          font-weight: 500;
          text-decoration: none;
        }
        @media (max-width: 640px) {
          p {
            font-size: 0.8rem;
            padding: 10px 5%;
          }
        }
      `}</style>
    </>
  );
};

export default BrandFooter;

BrandFooter.propTypes = {
  lightMode: PropTypes.bool,
};
