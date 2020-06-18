import React, { useContext, useEffect, useState } from 'react';

import BlackLink from '../../reusableStyledComponents/BlackLink';
import ProgressiveImage from '../../ProgressiveImage';
import YZEDAnimatedLogo from '../../reusableStyledComponents/YZEDAnimatedSVG';
import image from '../../../public/HQ_IMGS3_0120.png';
import theme from '../../../utilities/theme';

const LandingIntroduction = ({ model }) => {
  const imageBaseUrl = 'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/';
  const photo = {
    id: `${model.name} Detail View 1`,
    mini: `${imageBaseUrl}${model.imageSlug}_image_1_mini-compressor.jpg`,
    thumb: `${imageBaseUrl}${model.imageSlug}_image_1_thumb-compressor.jpg`,
    max: `${imageBaseUrl}${model.imageSlug}_image_1_max-compressor.jpg`,
  };

  return (
    <>
      <div className='main-intro-container p-0 lg:pl-dsk grid gap-8 lg:gap-16 sm:grid-cols-1 lg:grid-cols-2 mb-16 lg:mb-0'>
        <div className='text-section flex w-full mt-16 md:mt-24 lg:mt-0 text-center lg:text-left relative'>
          <div className='text-content mx-4 md:mx-0 flex flex-col justify-between'>
            <YZEDAnimatedLogo />
            <h1 className='pt-16 text-4xl lg:text-5xl my-0 mx-auto text-center lg:text-left'>
              Where Democratic Fashion catalyzes self-discovery.
            </h1>
            <p className='text-xl text-justify lg:text-left py-12 lg:py-0 my-0 mx-auto lg:mt-24 lg:m-0'>
              Democratic Fashion is a practice that minimizes the gap between a designers’ work and
              the mass market, while considering fair economic and social trade off. YZED is built
              upon the five most important factors of this practice, which you can read more about
              in our manifesto.
            </p>
            <BlackLink
              title='DOWNLOAD MANIFESTO'
              link='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/YZED_MANIFESTO.pdf'
            />
          </div>
        </div>
        <div className='photo-section flex flex-col justify-end p-0 lg:pt-16'>
          <ProgressiveImage image={photo.max} preview={photo.mini} alt={photo.id} />
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-weight: ${theme.fontWeights.semiBold};
          z-index: 1000;
          color: ${theme.colors.black};
          font-weight: 600;
        }
        p {
          font-weight: 200;

          color: ${theme.colors.black};
        }
        img {
          max-height: 444px;
          width: auto;
          max-width: 90%;
        }
        @media (max-width: 768px) {
          h1 {
            max-width: 90%;
          }
          p {
            max-width: 90%;
          }
        }
      `}</style>
      <style jsx global>{`
        .black-link {
          margin-top: 50px;
        }
        @media (max-width: 768px) {
          .black-link {
            display: block;
            margin-top: 0px;
            margin: 10px auto;
          }
        }
      `}</style>
    </>
  );
};

export default LandingIntroduction;
