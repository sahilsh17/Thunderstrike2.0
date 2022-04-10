import {React,useState, Fragment} from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { Alert, CloseButton } from 'react-bootstrap';
import axios from 'axios';
import './PaymentForm.css';
const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}
export default function PaymentForm(props) {
  const [e,setE] = useState(null);
  const a = props.item.price * 100;
  let [item, setItem] = useState({
    amount: props.item.price * 100,
    description: props.item.name
  })
  if(!item.price){
    item = {...item, amount: a};
  }
 
  const stripe = useStripe()
    const elements = useElements()

    const closeAlert = () => {
      setE(null);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
   

    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post('http://localhost:4000/payment', {
                amount: item.amount,
                description: item.description,
                id
            })

            if(response.data.success) {
              console.log('success');
             setE("success");
              
            }

        } catch (error) {
          console.log("Error", error);
          setE("fail");
            
        }
    } else {
        console.log(error.message)
    }
  }
  return (
    <>
     <form onSubmit= {handleSubmit}>
       <fieldset className="FormGroup">
         <div className="FormRow">
     
            <CardElement options={CARD_OPTIONS}></CardElement>
         </div>
       </fieldset>
       <button className="pay-now">Pay Now</button>
     </form>

    {e === "success" && <Fragment>
     <Alert variant="success">
     <img onClick= {() => closeAlert()} className="close" src="close.png"/>
                <Alert.Heading>Payment Successfull</Alert.Heading>
                <p>
                 Please contact Thunderstrike for next steps
                </p>
              </Alert></Fragment>}
    {e === "fail" && <Fragment> <Alert variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
               Please Try again
              </p>
            </Alert></Fragment>}
    
    </>
  )
}
