/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { FeaturedProduct } from '@/components/product';
import PropTypes from 'prop-types';

const ProductShowcase = ({ products, skeletonCount }) => {
  const darkMode = useSelector((state) => state.darkMode);
  const array = Object.values(darkMode);
  const darkModelo = array[0];

  return (
    <div className={`product-display-grid ${darkModelo ? 'dark-mode' : ''}`}>
      {(products.length === 0) ? new Array(skeletonCount).fill({}).map((product, index) => (
        <FeaturedProduct
          key={`product-skeleton ${index}`}
          product={product}
        />
      )) : products.map((product) => (
        <FeaturedProduct
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

ProductShowcase.defaultProps = {
  skeletonCount: 4
};

ProductShowcase.propTypes = {
  products: PropTypes.array.isRequired,
  skeletonCount: PropTypes.number
};

export default ProductShowcase;
