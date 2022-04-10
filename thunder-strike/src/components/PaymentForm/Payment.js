
import {React, useState} from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm';
import { Form, Container  } from 'react-bootstrap';

const PUBLIC_KEY = "pk_test_51JRq1hLpFVTS9LnR6CrcpNiYImRKZHwkLot6xx66zycObaBzKQody2pmRVPExz2jkn3VpELlvXoztK3mzAA72ywr00LQrqKk7Z";

const stripeTestPromise = loadStripe(PUBLIC_KEY);
export default function Payment(props) {
  
  const item = props.location.state.product;
  const [price, setPrice] = useState(item.price);
 const onChangeHandler = (event) => {
   setPrice(parseInt(event.target.value));
 }
  const newItem = {...item, price:price};
 console.log(newItem);
  return (
    
    <div className="payment-form">
     
     <Form.Label>Enter the amount to pay: </Form.Label> <Form.Control
        style={{ fontSize: 12, padding: 3 }}
        name="amount"
        placeholder="Enter Amount"
        onChange={onChangeHandler}
      />
  
    <Elements stripe={stripeTestPromise}>
     <PaymentForm item={newItem}/>
    </Elements>
    </div>
   
  )
}

