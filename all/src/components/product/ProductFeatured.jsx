import { ImageLoader } from '@/components/common';
import PropType from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductFeatured = ({ product }) => {
  const history = useHistory();
  const onClickItem = () => {
    if (!product) return;

    history.push(`/product/${product.id}`);
  };
  const darkMode = useSelector((state) => state.darkMode);
  
  const array = Object.values(darkMode)
  const darkModelo = array[0]

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div className={`product-display ${darkModelo ? 'dark-mode' : ''}`} onClick={onClickItem} role="presentation">
        <div className="product-display-img" style={darkModelo ? { backgroundColor: 'black', borderRadius: "50em" } : {}}>
          {product.image ? (
            <ImageLoader
              className={`product-card-img${darkModelo ? 'dark-mode' : ''}`}
              src={product.image}
            />
          ) : <Skeleton width="100%" height="100%" />}
        </div>
        <div className={`product-display-details ${darkModelo ? 'dark-mode' : ''}`}>
          <h2>{product.name || <Skeleton width={80} />}</h2>
          <p className="text-subtle text-italic">
            {product.brand || <Skeleton width={40} />}
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

ProductFeatured.propTypes = {
  product: PropType.shape({
    image: PropType.string,
    name: PropType.string,
    id: PropType.string,
    brand: PropType.string
  }).isRequired
};

export default ProductFeatured;
