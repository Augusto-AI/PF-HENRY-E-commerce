import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { SUCCESS } from "@/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, setBasketItems } from '../../../redux/actions/basketActions';
import { setPurchasedItems } from '../../../redux/actions/paypalActions';
import { BasketItem } from "@/components/basket";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function PaypalPayment({ subtotal }) {
  const [opcion, setOpcion] = useState(5);
  const history = useHistory();
  const dispatch = useDispatch();
  const { basket, purchasedItems } = useSelector((state) => ({
    basket: state.basket,
    purchasedItems: state.purchasedItems,
  }));


console.log(purchasedItems)

 
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: `${subtotal}`,
          },
        },
      ],
      description: "Gafas",
    });
  };
  
  
  

  const onApprove = (data, actions) => {
    return actions.order.capture(handlePay());
  };
  function handlePay() {
    dispatch(setPurchasedItems([basket]));
    history.push(SUCCESS);
}
  

  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  const handleCambio = (e) => {
    setOpcion(e.target.value);
  };

  return (
    <center>
      <div>
      {basket.length > 0 && basket.map((product) => (
         <BasketItem
          basket={basket}
          dispatch={dispatch}
          key={product.id}
          product={product}
          />
              ))}

        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
          style={{
            layout: "vertical",
            color: "black",
            shape: "rect",
            size: "small",
          }}
        />
      </div>
    </center>
  );
}
