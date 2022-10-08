// JavaScript source code
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
function Nav() {
    
    const [input, setinput] = useState('');



    return (
        <div className="Container">
            <nav >
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/Cart'>Cart</Link></li>

                </ul>
                <div className="search">
                    <Link to='/PrList' state={{desc: ` ${input}`} }>Search</Link>
                    <input type="text" value={input} onChange={e=>setinput(e.target.value) }/>
                </div>
            </nav>
        </div>
    );
}
export default Nav;
