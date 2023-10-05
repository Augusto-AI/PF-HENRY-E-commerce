/* eslint-disable max-len */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { clearBasket, loadBasket } from "@/redux/actions/basketActions"; // Assuming you have actions to load and clear the basket
import { BasketItem, BasketToggle } from "@/components/basket";
import { Boundary, Modal } from "@/components/common";
import { CHECKOUT_STEP_1 } from "@/constants/routes";
import { calculateTotal, displayMoney } from "@/helpers/utils";
import { useDidMount, useModal } from "@/hooks";

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

  useEffect(() => {
    // When the component mounts, check if the user is authenticated.
    // If yes, load their basket from the server.
    if (didMount && user) {
      dispatch(loadBasket(user.id)); // Replace with your action to load the basket from the server
    }
  }, [didMount, user, dispatch]);

  const onCheckOut = () => {
    if (basket.length !== 0 && user) {
      // Perform the payment process
      // ...

      // Then, clear the local basket and redirect the user
      dispatch(clearBasket()); // Clear the local basket
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
        <p className="text-center">You must log in to continue paying</p>
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
            Sign in to pay
          </button>
        </div>
      </Modal>
      <div className={`basket`}>
        <div className={`basket-list`}>
          <div className={`basket-header`}>
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
            >
              <span>Empty Basket</span>
            </button>
          </div>
          {basket.length <= 0 && (
            <div className="basket-empty">
              <h5 className="basket-empty-msg">Your basket is empty</h5>
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
        <div className={`basket-checkout`}>
          <div className="basket-total">
            <p className="basket-total-title">Subtotal :</p>
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
