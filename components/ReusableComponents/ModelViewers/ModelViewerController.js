import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import SwitchSelector from 'react-switch-selector';
import dynamic from 'next/dynamic';
import theme from '../../../utilities/theme';

const ModelViewerController = ({ model, topModelDark, setTopModelDark }) => {
  const [showAnimated, setShowAnimated] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const StationaryModelViewer = dynamic(() => import('./StationaryModelViewer'), {
    ssr: false,
  });

  const AnimatedModelViewer = dynamic(() => import('./AnimatedModelViewer'), {
    ssr: false,
  });

  const animationOptions = [
    {
      label: 'Stationary',
      value: false,
    },
    {
      label: 'Walking',
      value: true,
    },
  ];

  const lightOptions = [
    { label: 'Light', value: false },
    { label: 'Dark', value: true },
  ];

  const onAnimationChange = (newValue) => {
    setShowAnimated(newValue);
  };

  const onLightChange = (newValue) => {
    setTopModelDark(newValue);
  };

  return (
    <>
      <div className='viewer-container flex justify-between items-center'>
        <div className='model-viewer-container'>
          {showAnimated ? (
            <AnimatedModelViewer model={model} topModelDark={topModelDark} />
          ) : (
            <StationaryModelViewer model={model} topModelDark={topModelDark} />
          )}
        </div>
        <div className='controls'>
          <div className='toggle-animated-buttons'>
            <SwitchSelector
              onChange={onAnimationChange}
              options={animationOptions}
              initialSelectedIndex={0}
              backgroundColor={theme.colors.black}
              fontColor={theme.colors.white}
              selectedFontColor={theme.colors.black}
              selectedBackgroundColor={theme.colors.white}
              optionBorderRadius={0}
              selectionIndicatorMargin={3}
            />
          </div>
          <div className='toggle-light-buttons'>
            <SwitchSelector
              onChange={onLightChange}
              options={lightOptions}
              initialSelectedIndex={1}
              backgroundColor={theme.colors.black}
              fontColor={theme.colors.white}
              selectedFontColor={theme.colors.black}
              selectedBackgroundColor={theme.colors.white}
              optionBorderRadius={0}
              selectionIndicatorMargin={3}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .video-loading-logo {
          height: 90vh;
          z-index: 1000;
        }
        .viewer-container {
          height: 90vh;
          max-width: 80%;
          margin: 0 auto;
        }
        .controls {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          position: absolute;
          top: 4.8rem;
          right: 10%;
          z-index: 1000;
          background: transparent;
          color: ${!topModelDark ? theme.colors.black : theme.colors.white};
        }
        .toggle-animated-buttons,
        .toggle-light-buttons {
          height: 40px;
          width: 380px;
          margin-bottom: 20px;
          margin-top: 10px;
        }
        @media (max-width: 768px) {
          .controls {
            position: relative;
            display: block;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            padding: 2.5%;
            background: ${topModelDark ? theme.colors.black : theme.colors.white};
          }
          .viewer-container {
            display: flex;
            flex-direction: column;
            max-width: 100%;
          }
          .model-viewer-container {
            min-height: 80vh;
            max-width: 90%;
            margin: 0 auto;
          }
          .toggle-animated-buttons,
          .toggle-light-buttons {
            width: 100%;
            margin-bottom: 0px;
          }
      `}</style>
      <style jsx global>{`
        .react-switch-selector-wrapper {
          border-radius: 0px !important;
          border: 1px solid ${theme.colors.white} !important;
          height: 30px !important;
        }
        @media (max-width: 640px) {
          .react-switch-selector-wrapper {
            max-width: 100% !important;
          }
        }
      `}</style>
    </>
  );
};

export default ModelViewerController;

ModelViewerController.propTypes = {
  model: PropTypes.object.isRequired,
  topModelDark: PropTypes.bool.isRequired,
  setTopModelDark: PropTypes.func.isRequired,
};