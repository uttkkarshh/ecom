// JavaScript source code

function Cview({ product, func }) { 
   
    return (
        <>
        <div classNAme='CartView'>
           
            <img src={`image/${product.name}.jpg`} className='image' height='200px' />
            
            <h1>{product.name} </h1>
            <span className='Cdesc'  >{product.desc} </span>
            <span className='Cprice'>PRICE:{product.price} </span>
            <button type='button'  onClick={func} >remove</button>
            </div>
        </>
    );
    
}
export default Cview;
