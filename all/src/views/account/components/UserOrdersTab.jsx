import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setPurchasedItems } from "../../../redux/actions/paypalActions";

const UserOrdersTab = () => {
  const purchasedItems = useSelector((state) => state.purchasedItems);
  const array = Object.values(purchasedItems);
  let filteredItems = [];

  

  if (array && array[0]) {
    for (let i = 0; i < array.length; i++) {
      const purch = array[i];
      for (let j = 0; j < purch.length; j++) {
        if (Array.isArray(purch[j])) {
          filteredItems = [...filteredItems, ...purch[j]];
          console.log(filteredItems);
        }
      }
    }
  }
  
  return (
    <div className="user-orders-tab">
      <style>
        {`
          .user-orders-tab {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            background-color: smoke;
            border-radius: 100px;
          }

          h3 {
            font-size: 24px;
            margin-bottom: 10px;
          }

          .order-item {
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ddd;
            background-color: #fff;
          }

          .order-item img {
            max-width: 150px;
            height: auto;
          }
          

          .order-item p {
            margin: 0;
          }
          .order-item n {
            background-color: red;
            font-weight: bold;
            font-style: italic;
          }

          .order-item p:first-child {
            font-weight: bold;
          }

          .order-item p.price {
          }

          .no-orders {
            font-weight: bold;
            font-style: italic;
          }
        `}
      </style>

      <h3>My Orders</h3>
      {filteredItems.length === 0 ? (
        <strong>
          <span className="no-orders">You don't have any orders</span>
        </strong>
      ) : (
        filteredItems.map((item) => (
          <div className="order-item" key={item.id}>
            <p className="order-item n">{item.name}</p>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p>Brand: {item.brand}</p>
            <p className="price">Price: {item.price * item.quantity} $</p>
            <p>Quantity purchased: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default React.memo(UserOrdersTab);
