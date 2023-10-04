import React, {useState} from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { SUCCESS } from "@/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { setPurchasedItems } from '../../../redux/actions/paypalActions';
import { setBasketItems } from "../../../redux/actions/basketActions"
import { BasketItem } from "@/components/basket";
import { useFormikContext } from 'formik';
import firebaseIn from '@/services/firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


  // const [currentUserEmail, setCurrentUserEmail] = useState(""); // Estado para el correo electrónico del usuario


 

  // const handleEmailChange = (email) => {
  //   setCurrentUserEmail(email);
  // };

  // const onApprove = (data, actions) => {
  //  return actions.order.capture(() => {
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

  
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function PaypalPayment({ subtotal }) {


  //const [opcion, setOpcion] = useState(5);
  //const history = useHistory();
  //const dispatch = useDispatch();

  const { basket, purchasedItems, profile, auth } = useSelector((state) => ({
    basket: state.basket,
    profile: state.profile,
    auth: state.auth
  }));
  
  const dispatch = useDispatch();
  const history = useHistory()

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


  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  const handleCambio = (e) => {
    setOpcion(e.target.value);
  };

  //const subject = "holla";
  //const text = "paymentt"
  async function handlePay() {
    const userId = auth.id;
    const dataPayment = {
      isActive: true,
      isArrive: false,
      UserId: userId,
      product: basket,
      total: subtotal,
      date: new Date(),
    };
  
    for (const item of basket) {
      const productId = item.id;
      const quantityToReduce = item.quantity;
  
      try {
        const productRef = firebase.firestore().collection('products').doc(productId);
        const productDoc = await productRef.get();
  
        if (productDoc.exists) {
          const productData = productDoc.data();
          const updatedMaxQuantity = productData.maxQuantity - quantityToReduce;
          await productRef.update({ maxQuantity: updatedMaxQuantity });
             console.log(productRef)
        } else {
          console.error(productId);
        }
      } catch (error) {
        console.error(`Error, ${error}`);
      }
    }
  
    dispatch(setBasketItems());
    await firebaseIn.addOrder(userId, dataPayment);
    history.push(SUCCESS);
  }


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