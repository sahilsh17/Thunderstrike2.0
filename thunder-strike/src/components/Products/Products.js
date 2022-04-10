import React from 'react'
import {ProductList} from './ProductList';
import './Products.css';
import { Link } from 'react-router-dom';
function Products() {

  return (
    <>
    <div className="product-section">
     <h1 className="product-title">Products</h1>
    <div className="row card-container">
   
    {ProductList.map(product => {
      
      return (
       
        <>
         <div className="wrapper">
         <article className="card">
         <div className="card__media">
           <img src={product.SliderData[0].image} alt="Card image" />
         </div>

         <div className="card__content">
           <header className="card__header">
             <h2 className="card__title">{product.name}</h2>
            
           </header>
           {/* <p class="card__excerpt">{product.description}</p> */}
           <h2 className="card__price">${product.price}</h2>
           <div className="overlay">
           <Link to={{pathname:'/product-details', state: {SliderData: product.SliderData, title: product.name, price: product.price, description: product.description, link:product.link}}}> <button className="view">View</button> </Link>
           </div>
         </div>
         
        </article>
        </div>
      </>
      )
      
    })}
   
    
  
  </div>
  </div>
  </>
  )
 
}

export default Products
