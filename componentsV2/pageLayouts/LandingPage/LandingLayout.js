import React, { useContext, useEffect, useState } from 'react';

import { Element } from 'react-scroll';
import LandingAbout from './LandingAbout';
import LandingContact from './LandingContact';
import LandingIntroduction from './LandingIntroduction';
import LandingNavigation from './LandingNavigation';
import Layout from '../../../components/Layout';
import ModelViewerController from '../../reusableStyledComponents/modelViewers/ModelViewerController';
import theme from '../../../utilities/theme';

const LandingLayout = ({ model }) => {
  const [topModelDark, setTopModelDark] = useState(true);
  return (
    <Layout>
      <header id='top' className='w-full flex flex-col fixed pin-t pin-r pin-l px-dsk py-mob'>
        <LandingNavigation />
      </header>
      <main>
        <section className='landing-section'>
          <Element id='model-section' name='model' className='scroll-section dark'>
            <ModelViewerController
              model={model}
              topModelDark={topModelDark}
              setTopModelDark={setTopModelDark}
            />
          </Element>
        </section>
        <section className='landing-section'>
          <Element id='intro-section' name='introduction' className='scroll-section light '>
            <LandingIntroduction model={model} />
          </Element>
        </section>
        <section className='landing-section'>
          <Element id='about-section' name='about' className='scroll-section dark'>
            <LandingAbout model={model} />
          </Element>
        </section>
        <section className='landing-section'>
          <Element id='class-section' name='contact' className='scroll-section light'>
            <LandingContact />
          </Element>
        </section>
      </main>
      <style jsx>{`
        #top {
          background-color: #0d0d0df6;
          display: fixed;
          left: 0;
          top: 0;
          z-index: 10000;
        }
        .landing-section {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <style jsx global>
        {`
          .dark {
            background-color: ${theme.colors.black};
          }
          #model-section {
            background-color: ${topModelDark ? theme.colors.black : theme.colors.white};
            min-height: 100vh;
            padding-top: 85px;
            min-width: 100vw;
          }
          #intro-section,
          #about-section {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 100vw;
          }
          #contact-section {
            min-width: 100vw;
          }
          .scroll-section {
            width: 100%;
            min-height: 500px;
             {
              /* min-height: 100vh; */
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default LandingLayout;
