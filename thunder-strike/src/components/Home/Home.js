
import react from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import Products from '../Products/Products';
import {SliderData} from '../ImageSlider/SliderData';
import { Link } from 'react-router-dom';


function Home() {
  const Product = {
    name:null, 
    price:null, 
    description:null};
  return (
    <>
    <ImageSlider slides={SliderData}/> 
    <Products />
    <h3> For all other payments please click this link  <Link to={{pathname:'/payment-form', state:{product: Product}}}> Pay Now</Link></h3>
    </>
   
  );
}

export default Home;
