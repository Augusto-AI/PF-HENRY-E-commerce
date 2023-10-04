import { CheckOutlined } from '@ant-design/icons';
import { ImageLoader } from '@/components/common';
import { displayMoney } from '@/helpers/utils';
import PropType from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProductItem = ({ product, isItemOnBasket, addToBasket }) => {
  const history = useHistory();
  
  const darkMode = useSelector((state) => state.darkMode);
  
  const array = Object.values(darkMode)
  const darkModelo = array[0]

  const onClickItem = () => {
    if (!product) return;

    if (product.id) {
      history.push(`/product/${product.id}`);
    }
  };

  const itemOnBasket = isItemOnBasket ? isItemOnBasket(product.id) : false;

  const handleAddToBasket = () => {
    if (addToBasket) addToBasket({ ...product, selectedSize: product.sizes[0] });
  };
  const isOutOfStock = product.maxQuantity <= 0;

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`product-card ${!product.id ? 'product-loading' : ''}`}
        style={{
          border: product && itemOnBasket ? '1px solid #a6a5a5' : '',
          boxShadow: product && itemOnBasket ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
        }}
      >
        {itemOnBasket && <CheckOutlined className="fa fa-check product-card-check" />}
        <div
          className={`product-card-content ${darkModelo ? 'dark-mode' : ''}`}
          onClick={onClickItem}
          role="presentation"
        >
          <div className={`product-card-img-wrapper ${darkModelo ? 'dark-mode' : ''}`}>
            {product.image ? (
              <ImageLoader
                alt={product.name}
                className={`product-card-img ${darkModelo ? 'dark-mode' : ''}`}
                src={product.image}
              />
            ) : <Skeleton width="100%" height="90%" />}
                            {isOutOfStock && (
                <div className="out-of-stock-message">
            <p style={{ color: "red", display: "inline"}}>We are so sorry, this item is out of stock.</p>
           </div>
            )}
          </div>
          <div className={`product-details ${darkModelo ? 'dark-mode' : ''}`}>
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {product.name || <Skeleton width={80} />}
            </h5>
            <p className={`product-card-brand ${darkModelo ? 'dark-mode' : ''}`}>
              {product.brand || <Skeleton width={60} />}
            </p>
            <h4 className="product-card-price">
              {product.price ? displayMoney(product.price) : <Skeleton width={40} />}
            </h4>
          </div>
        </div>
        {product.id && (
          <button
            className={`product-card-button button-small button button-block ${itemOnBasket ? 'button-border button-border-gray' : ''}`}
            onClick={handleAddToBasket}
            type="button"
          >
            {!isOutOfStock ? itemOnBasket ? 'Remove from basket' : 'Add to basket': ":("}
          
          </button>
        )}

      </div>
    </SkeletonTheme>
  );
};

ProductItem.defaultProps = {
  isItemOnBasket: undefined,
  addToBasket: undefined
};

ProductItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropType.object.isRequired,
  isItemOnBasket: PropType.func,
  addToBasket: PropType.func
};

export default ProductItem;
