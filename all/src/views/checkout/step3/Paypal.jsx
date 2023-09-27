import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { SUCCESS } from "@/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { setPurchasedItems, setBasketItems } from '../../../redux/actions/paypalActions';
import { minusQtyItem } from "../../../redux/actions/productActions"
import { BasketItem } from "@/components/basket";
import firebase from '@/services/firebase';


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function PaypalPayment({ subtotal }) {
  const [opcion, setOpcion] = useState(5);
  const history = useHistory();
  const dispatch = useDispatch();
  const { basket, purchasedItems, profile, auth } = useSelector((state) => ({
    basket: state.basket,
    purchasedItems: state.purchasedItems,
    profile: state.profile,
    auth: state.auth
  }));





 
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

  async function handlePay() {

    const userId = auth.id;
    const dataPayment = {
      isActive: true,
      UserId: userId,
      product: basket,
      total: subtotal,
      date: new Date(),
    };
    dispatch(setBasketItems([]))
    dispatch(setPurchasedItems([basket]));
    await firebase.addOrder(userId, dataPayment);
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