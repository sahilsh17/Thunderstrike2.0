import logo from './logo.svg';
import './App.css';
import Navigation from './components/Nav'

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import StripeContainer from './components/StripeContainer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Payment from './components/PaymentForm/Payment';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
     <Navigation/>
   
    <Switch>
        <Route path="/product-details" exact component={ProductDetail} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={Main} />
        <Route path="/payment" exact component={StripeContainer} />
        <Route path="/payment-form" exact component={Payment} />

      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
