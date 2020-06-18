import React, { useContext, useEffect, useState } from 'react';

import LandingLayout from '../componentsV2/pageLayouts/LandingPage/LandingLayout';
import Layout from '../componentsV2/Layout';
import fetch from 'node-fetch';
import theme from '../utilities/theme';

const MarineSerre = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const [mainProduct, setMainProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    const model = {
      brandName: product.fields.brandName.stringValue,
      glbFile: product.fields.glbFile.stringValue,
      usdzFile: product.fields.usdzFile.stringValue,
      id: product.name.slice(63),
      imageSlug: product.fields.imageSlug.stringValue,
      animatedGlbFile: product.fields.animatedGlbFile.stringValue,
      descriptions: product.fields.productDescriptions.arrayValue.values.map(
        (value) => value.stringValue
      ),
    };
    setMainProduct(model);
    setLoading(false);
  }, []);

  return (
    <Layout title='YZED x Marine Serre' loading={!mainProduct || loading}>
      <LandingLayout model={mainProduct} />
    </Layout>
  );
};

export async function getStaticProps() {
  const product = await fetch(
    `https://firestore.googleapis.com/v1/projects/yzed-88819/databases/(default)/documents/landingBrand/${process.env.brandLandingMarineSerre}`,
    { cors: 'no-cors' }
  ).then((res) => res.json().then((data) => data));

  return {
    props: {
      product,
    },
  };
}

export default MarineSerre;