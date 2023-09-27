import { useBasket } from '@/hooks';
import PropType from 'prop-types';
import React from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
const ProductGrid = ({ products }) => {
  const { addToBasket, isItemOnBasket } = useBasket();

  const darkMode = useSelector((state) => state.darkMode);
  
  const array = Object.values(darkMode)
  const darkModelo = array[0]
  return (
    <div className={`product-grid ${darkModelo ? 'dark-mode' : ''}`}>
      {products.length === 0 ? new Array(12).fill({}).map((product, index) => (
        <ProductItem
          // eslint-disable-next-line react/no-array-index-key
          key={`product-skeleton ${index}`}
          product={product}
        />
      )) : products.map((product) => (
        <ProductItem
          key={product.id}
          isItemOnBasket={isItemOnBasket}
          addToBasket={addToBasket}
          product={product}
        />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropType.array.isRequired
};

export default ProductGrid;
