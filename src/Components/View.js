import { Outlet, Link } from "react-router-dom";
function View({ product, func }) {
    return (
        <>
            <div className='View'>
            <img src={`image/${product.name}.jpg`} className='imagev' height='200px' />
            <div>
                <h1>{product.name} </h1>
                <span className='desc'  >{product.desc} </span>
                <span className='price'>PRICE:{product.price} </span>
            </div>
            <div>
                    <Link className='VLink' to='/Cart' state={product } > AddToCart </Link>
                    <button type='button' onClick={()=>func(false) } >Back</button>
                </div>
                </div>
        </>);
}
export default View;