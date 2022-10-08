
import { useState } from 'react';

function Product({ product,func1,func2 }) {
   
    

    return(
    
        <div className='product'>

            <div className='Pimage'>
                <img src={`image/${product.name}.jpg`} className='image' height='200px' />
          </div>
          <div className='Pspe'>
          <h1>{product.name} </h1>
          <span className='desc'  >{product.desc} </span>
          <span className='price'>PRICE:{product.price} </span>
             </div>
          <div className='Vbutton'>
                <button type='button' className='Vb'onClick={() => {
                    func1(true);
                    func2(product);
                }} >view</button>
          </div>
           </div>
  );
}

export default Product;