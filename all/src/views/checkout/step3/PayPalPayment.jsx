/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormikContext } from 'formik';
import React from 'react';
import PaypalPayment from './Paypal';

const PayPalPayment = ({ subtotal }) => {
  const { values, setValues } = useFormikContext();

  return (
    <div className={` ${values.type === 'paypal' ? 'is-selected-payment' : ''}`}>
   
            <PaypalPayment 
            subtotal={subtotal}

            />
 
    </div>
  );
};

export default PayPalPayment;
