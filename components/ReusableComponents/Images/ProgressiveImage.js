import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const ProgressiveImage = ({ preview, image, alt }) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);

  const fetchImage = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setTimeout(() => {
        setCurrentImage(loadingImage.src);
        setLoading(false);
      }, 500);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, [preview]);

  return (
    <img
      style={{
        filter: `${loading ? 'blur(30px)' : ''}`,
        transition: '1s filter linear',
        background: 'grey',
        height: '1500px',
        width: '3000px',
        maxWidth: '100%',
        height: 'auto',
        overflow: 'hidden',
      }}
      src={currentImage}
      alt={alt}
    />
  );
};

export default ProgressiveImage;

ProgressiveImage.propTypes = {
  preview: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};