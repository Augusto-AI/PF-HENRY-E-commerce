// /* eslint-disable jsx-a11y/label-has-associated-control */
// import { CustomInput, CustomMobileInput } from '@/components/formik';
// import { Field, useFormikContext } from 'formik';
// import React from 'react';

// const ShippingForm = () => {
//   const { values } = useFormikContext();
//   return (
//     <div className="checkout-shipping-wrapper">
//       <div className="checkout-shipping-form">
//         <div className="checkout-fieldset">
//           <div className="d-block checkout-field">
//             <Field
//               name="fullname"
//               type="text"
//               label="* Full Name"
//               placeholder="Enter your full name"
//               component={CustomInput}
//               style={{ textTransform: 'capitalize' }}
//             />
//           </div>
//           <div className="d-block checkout-field">

//             <Field
//               name="email"
//               type="email"
//               label="* Email Address"
//               placeholder="Enter your email address"
//               component={CustomInput}
//             />
//           </div>
//         </div>
//         <div className="checkout-fieldset">
//           <div className="d-block checkout-field">
//             <Field
//               name="address"
//               type="text"
//               label="* Shipping Address"
//               placeholder="Enter full shipping address"
//               component={CustomInput}
//             />
//           </div>
//           <div className="d-block checkout-field">
//             <CustomMobileInput name="mobile" defaultValue={values.mobile} />
//           </div>
//         </div>
//         <div className="checkout-fieldset">

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShippingForm;


import { CustomInput, CustomMobileInput } from '@/components/formik';
import { Field, useFormikContext } from 'formik';
import React, { useEffect } from 'react';

const ShippingForm = ({ onEmailChange }) => { // Agrega una prop para pasar la función de cambio de correo electrónico

  const { values } = useFormikContext();

  const handleEmailChange = (e) => {
    onEmailChange(e.target.value);
  };

  return (
    <div className="checkout-shipping-wrapper">
      <div className="checkout-shipping-form">
        <div className="checkout-fieldset">
          <div className="d-block checkout-field">
            <Field
              name="fullname"
              type="text"
              label="* Full Name"
              placeholder="Enter your full name"
              component={CustomInput}
              style={{ textTransform: 'capitalize' }}
            />
          </div>
          <div className="d-block checkout-field">
            <Field
              name="email"
              type="email"
              label="* Email Address"
              placeholder="Enter your email address"
              component={CustomInput}
              // Utiliza setFieldValue para actualizar el valor del campo de correo electrónico
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="checkout-fieldset">
          <div className="d-block checkout-field">
            <Field
              name="address"
              type="text"
              label="* Shipping Address"
              placeholder="Enter full shipping address"
              component={CustomInput}
            />
          </div>
          <div className="d-block checkout-field">
            <CustomMobileInput name="mobile" defaultValue={values.mobile} />
          </div>
        </div>
        <div className="checkout-fieldset">

        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
