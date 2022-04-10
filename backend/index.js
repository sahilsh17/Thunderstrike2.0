const express = require('express');
const app = express();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

  
app.post("/payment", cors(), async(req, res) => {
  let {amount, description, id} = req.body;
  console.log(req.body);
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "CAD",
      description: description,
      payment_method: id,
      confirm: true
    })

    console.log("payment",payment);
    res.json({
      message: "payment successful",
      success: true
    })
  } catch (error) {
    console.log("error",error);
    res.json({
      message: "payment failed",
      success: true
    })
  }
})


app.listen(process.env.PORT || 4000 , ()=>{
  console.log('listening on port 4000');
})