import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { SUCCESS } from "@/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, setBasketItems } from '../../../redux/actions/basketActions';
import { setPurchasedItems } from '../../../redux/actions/paypalActions';
import { BasketItem } from "@/components/basket";
import { useFormikContext } from 'formik';




const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function PaypalPayment({ subtotal }) {
  const [opcion, setOpcion] = useState(5);
  const history = useHistory();
  const dispatch = useDispatch();
  const { basket, purchasedItems } = useSelector((state) => ({
    basket: state.basket,
    purchasedItems: state.purchasedItems,
  }));
  // const [currentUserEmail, setCurrentUserEmail] = useState(""); // Estado para el correo electrónico del usuario


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

  // const handleEmailChange = (email) => {
  //   setCurrentUserEmail(email);
  // };

  // const onApprove = (data, actions) => {
  //   return actions.order.capture(() => {
  //     dispatch(setPurchasedItems([basket]));
  //     sendConfirmationEmail(currentUserEmail);
  //   });
  // };
  
  // const sendConfirmationEmail = async (email) => {
  //   const sendConfirmationEmailFunction = firebase.functions().httpsCallable("sendConfirmationEmail");
  
  //   try {
  //     const result = await sendConfirmationEmailFunction({ userEmail: email }); // Utiliza currentUserEmail
  //     if (result.data.success) {
  //       console.log("Correo electrónico de confirmación enviado con éxito");
  //     } else {
  //       console.error("Error al enviar el correo electrónico de confirmación:", result.data.error);
  //     }
  //   } catch (error) {
  //     console.error("Error al llamar a la Cloud Function:", error);
  //   }
  // };
  
  

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
         {/* <ShippingForm onEmailChange={handleEmailChange} /> */}
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



// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import { useHistory } from "react-router-dom";
// import { SUCCESS } from "@/constants/routes";
// import { useDispatch, useSelector } from "react-redux";
// import { setPurchasedItems } from '../../../redux/actions/paypalActions';
// import { setBasketItems } from "../../../redux/actions/basketActions"
// import { BasketItem } from "@/components/basket";
// import { useFormikContext } from 'formik';
// import ShippingForm from '../step2/ShippingForm'; // Asegúrate de que la ruta sea correcta






// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

// export default function PaypalPayment({ subtotal }) {
//   const [opcion, setOpcion] = useState(5);
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const { basket, purchasedItems, profile, auth } = useSelector((state) => ({
//     basket: state.basket,
//     purchasedItems: state.purchasedItems,
//     profile: state.profile,
//     auth: state.auth
//   }));
//   const [currentUserEmail, setCurrentUserEmail] = useState(""); // Estado para el correo electrónico del usuario





 
//   const createOrder = (data, actions) => {
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             currency_code: "USD",
//             value: `${subtotal}`,
//           },
//         },
//       ],
//       description: "Gafas",
//     });
//   };
  

  
  

//   // const onApprove = (data, actions) => {
//   //   return actions.order.capture(handlePay());
//   // };

//   const handleEmailChange = (email) => {
//     setCurrentUserEmail(email);
//   };

//   const onApprove = (data, actions) => {
//     return actions.order.capture(() => {
//       dispatch(setPurchasedItems([basket]));
//       sendConfirmationEmail(currentUserEmail);
//     });
//   };
  
//   const sendConfirmationEmail = async (email) => {
//     const sendConfirmationEmailFunction = firebase.functions().httpsCallable("sendConfirmationEmail");
  
//     try {
//       const result = await sendConfirmationEmailFunction({ userEmail: email }); // Utiliza currentUserEmail
//       if (result.data.success) {
//         console.log("Correo electrónico de confirmación enviado con éxito");
//       } else {
//         console.error("Error al enviar el correo electrónico de confirmación:", result.data.error);
//       }
//     } catch (error) {
//       console.error("Error al llamar a la Cloud Function:", error);
//     }
//   };
  
  


//   async function handlePay() {

//     const userId = auth.id;
//     const dataPayment = {
//       isActive: true,
//       UserId: userId,
//       product: basket,
//       total: subtotal,
//       date: new Date(),
//     };
//     dispatch(setBasketItems([]))
//     dispatch(setPurchasedItems([basket]));
//     await firebase.addOrder(userId, dataPayment);
//     history.push(SUCCESS);
// }

  

//   const handleChange = (e) => {
//     setPrice(e.target.value);
//   };
//   const handleCambio = (e) => {
//     setOpcion(e.target.value);
//   };

//   return (
//     <center>
//       <div>
//       {basket.length > 0 && basket.map((product) => (
//          <BasketItem
//           basket={basket}
//           dispatch={dispatch}
//           key={product.id}
//           product={product}
//           />
//               ))}
//          <ShippingForm onEmailChange={handleEmailChange} /> 
//         <PayPalButton
//           createOrder={(data, actions) => createOrder(data, actions)}
//           onApprove={(data, actions) => onApprove(data, actions)}
//           style={{
//             layout: "vertical",
//             color: "black",
//             shape: "rect",
//             size: "small",
//           }}
//         />
//       </div>
//     </center>
//   );
// }