import React, { useContext, useEffect, useState } from 'react';

import theme from '../../../utilities/theme';

const LoadingFillIcon = () => {
  return (
    <>
      <div className='box'>
        <svg
          viewBox='0 0 156 26'
          height='200'
          width='300'
          xmlns='http://www.w3.org/2000/svg'
          className='hello'>
          <defs>
            <clipPath id='myClip'>
              <path d='M35.5944 19.4567L53.9629 6.54333H38.8463L40.5161 0H70.266L68.8598 6.54333L50.755 19.4567H67.0581L65.3004 26H34.2761L35.5944 19.4567Z' />
              <path d='M38.2751 0H25.839L17.3579 12.5233L14.3258 0H1.93365L7.47055 19.4567H1.75788L0.175903 26H9.5359C19.4672 26 25.3996 17.7667 25.3996 17.7667L38.2751 0Z' />
              <path d='M107.091 0H127.393C136.357 0 140.268 3.42333 138.335 13C136.401 22.1433 130.908 26 122.163 26H101.642L107.091 0ZM113.419 19.4567H119.395C124.141 19.4567 126.558 17.1167 127.437 13C128.272 8.88333 126.865 6.54333 122.119 6.54333H116.143L113.419 19.4567Z' />
              <path d='M74.924 0H102.96L101.642 6.32667H84.0203L83.2733 9.83667H99.6203L98.302 16.1633H81.955L81.2079 19.6733H98.8293L97.511 26H69.475L74.924 0Z' />
              <path d='M150.639 26C153.576 26 155.956 23.6525 155.956 20.7566C155.956 17.8608 153.576 15.5133 150.639 15.5133C147.702 15.5133 145.322 17.8608 145.322 20.7566C145.322 23.6525 147.702 26 150.639 26Z' />
            </clipPath>
          </defs>
        </svg>
      </div>
      <style jsx>{`
        .box {
          width: 100%;
          height: 200px;
          line-height: 200px;
          text-align: center;
          font-size: 25px;
          font-weight: 600;
          text-transform: uppercase;
          position: relative;
          clip-path: url('#myClip');
          overflow: hidden;
        }
        .box svg {
        }
        .box:before {
          content: '';
          position: absolute;
          width: 400px;
          height: 200px;
          background: linear-gradient(
            ${theme.colors.aqua},
            ${theme.colors.purple},
            ${theme.colors.aqua},
            ${theme.colors.purple}
          );
          left: 50%;
          transform: translateX(-50%);
          animation: fill 2s ease-in-out infinite;
          z-index: -1;
        }
        @keyframes fill {
          0% {
            top: 0px;
          }
          50% {
            top: -150px;
          }
          100% {
            top: 0px;
          }
        }
      `}</style>
    </>
  );
};

export default LoadingFillIcon;
