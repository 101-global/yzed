import { Modal, useModal } from 'react-morphing-modal';
import React, { useContext, useEffect, useRef, useState } from 'react';

import Carousel from 'react-multi-carousel';
import ProgressiveClickImage from './ProgressiveClickImage';
import ProgressiveImage from './ProgressiveImage';
import PropTypes from 'prop-types';
import theme from '../utilities/theme';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const Image = ({ openModal, photo, setCurrentImage }) => {
  const btnRef = useRef(null);

  const handleClick = () => {
    setCurrentImage({ mini: photo.mini, max: photo.max, alt: photo.id });
    openModal(btnRef);
  };
  return (
    <>
      <div ref={btnRef} className='click-image-wrapper'>
        <ProgressiveClickImage
          preview={photo.mini}
          image={photo.thumb}
          callBack={handleClick}
          alt={photo.id}
        />
      </div>
      <style jsx global>{`
        .click-image-wrapper {
          min-height: 100px;
        }
        .click-image-wrapper img {
          object-fit: contain;
          border: 1px solid white;
          width: 100%;
        }
      `}</style>
    </>
  );
};

Image.propTypes = {
  openModal: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

const ImageCarousel = ({ photos, lightMode }) => {
  const [currentImage, setCurrentImage] = useState(null);

  const { modalProps, open } = useModal({ background: '#0d0d0df9' });

  return (
    <>
      <Carousel
        responsive={responsive}
        partialVisible={true}
        swipeable={true}
        ssr={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}>
        {photos.map((photo) => {
          const ref = useRef(null);
          return (
            <div
              ref={ref}
              className={lightMode ? 'light photo-wrapper' : 'photo-wrapper'}
              key={photo.id}>
              <Image
                openModal={open}
                photo={photo}
                setCurrentImage={setCurrentImage}
                lightMode={lightMode}
              />
            </div>
          );
        })}
      </Carousel>
      <Modal {...modalProps}>
        <div className='modal-image-container'>
          {currentImage && (
            <ProgressiveImage
              preview={currentImage.mini}
              image={currentImage.max}
              alt={currentImage.id}
            />
          )}
        </div>
      </Modal>
      <style jsx>{`
        .photo-wrapper {
          width: 95%;
          margin: 0 auto;
        }
        .modal-image-container img {
          border: 1px solid ${theme.colors.white};
          margin: 5px;
        }
        .modal-image-container {
          height: 100%;
          display: flex;
          overflow: hidden;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        .photo-wrapper {
          width: 98%;
          margin: 0 auto;
          overflow: hidden;
        }

        .modal-image-container img {
          width: 100%;
          height: auto;
        }
        .photo-wrapper img {
          border-color: ${lightMode ? theme.colors.black : theme.colors.white};
        }
      `}</style>
    </>
  );
};

export default ImageCarousel;

ImageCarousel.propTypes = {
  photos: PropTypes.array.isRequired,
  lightMode: PropTypes.bool,
};