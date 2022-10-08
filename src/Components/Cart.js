// JavaScript source code
import { useState, useEffect } from 'react';
import Cview from './Cview';
import { useLocation } from 'react-router-dom'
function Cart() {
    const [items, setitems] = useState([]);

    function remove(x) {
        setitems(items.filter((pro) => x.id != pro.id))
    }
    const location = useLocation();
    const item = location.state;
    useEffect(() => {
        setitems(items => [...items, item]);
    },[])

    return (
        <>
            <br /> <br /> <br /> <br /> <br />
            {items && items.map((pro) => (
                <Cview key={pro.id} product={pro} func={remove} />
            )
            )}
        </>
        );
    }

export default Cart;