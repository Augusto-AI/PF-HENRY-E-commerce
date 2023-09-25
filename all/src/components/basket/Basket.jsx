/* eslint-disable max-len */
import { BasketItem, BasketToggle } from "@/components/basket";
import { Boundary, Modal } from "@/components/common";
import { CHECKOUT_STEP_1 } from "@/constants/routes";
import firebase from 'firebase/compat/app';
import { calculateTotal, displayMoney } from "@/helpers/utils";
import { useDidMount, useModal } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { clearBasket } from "@/redux/actions/basketActions";

const Basket = () => {
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const { basket, user } = useSelector((state) => ({
    basket: state.basket,
    user: state.auth,

  }));
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const didMount = useDidMount();
  const darkMode = useSelector((state) => state.darkMode);
  
  const array = Object.values(darkMode)
  const darkModelo = array[0]

  useEffect(() => {
    if (didMount && firebase.auth.currentUser && basket.length !== 0) {
      firebase
        .saveBasketItems(basket, firebase.auth.currentUser.uid)
        .then(() => {
          console.log("Item saved to basket");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [basket.length]);

  const onCheckOut = () => {
    if (basket.length !== 0 && user) {
      document.body.classList.remove("is-basket-open");
      history.push(CHECKOUT_STEP_1);
    } else {
      onOpenModal();
    }
  };

  const onSignInClick = () => {
    onCloseModal();
    document.body.classList.remove("basket-open");
    history.push(CHECKOUT_STEP_1);
  };

  const onClearBasket = () => {
    if (basket.length !== 0) {
      dispatch(clearBasket());
    }
  };

  return user && user.role === "ADMIN" ? null : (
    <Boundary>
      <Modal isOpen={isOpenModal} onRequestClose={onCloseModal}>
        <p className="text-center">
        You must log in to continue paying
        </p>
        <br />
        <div className="d-flex-center">
          <button
            className="button button-border button-border-gray button-small"
            onClick={onCloseModal}
            type="button"
          >
            Keep buying
          </button>
          &nbsp;
          <button
            className="button button-small"
            onClick={onSignInClick}
            type="button"
          >
            Sign in to for pay
          </button>
        </div>
      </Modal>
      <div className={`basket ${darkModelo ? 'dark-mode' : ''}`}>
        <div className={`basket-list ${darkModelo ? 'dark-mode' : ''}`}>
          <div className={`basket-header ${darkModelo ? 'dark-mode' : ''}`}>
            <h3 className="basket-header-title">
              My Basket &nbsp;
              <span>
                ({` ${basket.length} ${basket.length > 1 ? "items" : "item"}`})
              </span>
            </h3>
            <BasketToggle>
              {({ onClickToggle }) => (
                <span
                  className="basket-toggle button button-border button-border-gray button-small"
                  onClick={onClickToggle}
                  role="presentation"
                  style={darkModelo ? { backgroundColor: 'black' } : {}}
                >
                  Close
                </span>
              )}
            </BasketToggle>
            <button
              className="basket-clear button button-border button-border-gray button-small"
              disabled={basket.length === 0}
              onClick={onClearBasket}
              type="button"
              style={darkModelo ? { backgroundColor: 'black' } : {}}

            >
              <span>Empty Basket</span>
            </button>
          </div>
          {basket.length <= 0 && (
            <div className="basket-empty" style={darkModelo ? { backgroundColor: 'black', color: "white" } : {}}>
              <h5 className="basket-empty-msg" style={darkModelo ? { backgroundColor: 'black', color: "white" } : {}}>Su canasta está vacia</h5>
            </div>
          )}
          {basket.map((product, i) => (
            <BasketItem
              // eslint-disable-next-line react/no-array-index-key
              key={`${product.id}_${i}`}
              product={product}
              basket={basket}
              dispatch={dispatch}
            />
          ))}
        </div>
        <div className={`basket-checkout ${darkModelo ? 'dark-mode' : ''}`}>
          <div className="basket-total">
            <p className="basket-total-title"   
  
           >Subtotal :
           </p>
            <h2 className="basket-total-amount">
              {displayMoney(
                calculateTotal(
                  basket.map((product) => product.price * product.quantity)
                )
              )}
            </h2>
          </div>
          <button
            className="basket-checkout-button button"
            disabled={basket.length === 0 || pathname === "/checkout"}
            onClick={onCheckOut}
            type="button"
            
          >
            Finish
          </button>
        </div>
      </div>
    </Boundary>
  );
};

export default Basket;
