import {React, useState }from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import './PaymentForm.css';

const PUBLIC_KEY = "pk_test_51JRq1hLpFVTS9LnR6CrcpNiYImRKZHwkLot6xx66zycObaBzKQody2pmRVPExz2jkn3VpELlvXoztK3mzAA72ywr00LQrqKk7Z";

const stripeTestPromise = loadStripe(PUBLIC_KEY);
export default function StripeContainer(props) {
  
  const item = props.location.state.product;
  console.log(item);
  
  return (
    <div className="payment-form">
    <Elements stripe={stripeTestPromise}>
     <PaymentForm item={item}/>
    </Elements>
    </div>
  )
}
