import { useState, useEffect } from 'react';
import Product from './Components/Product';
import View from './Components/View';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function PList() {
    const [data, setData] = useState([]);
    const [isPending, setPending] = useState(true);
    const [err, setError] = useState(null);
   //sole.log(a);
    const location = useLocation();
    const fil  = location.state;
    
    useEffect(() => {
       
        fetch('http://localhost:4000/user/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(fil)
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setPending(false);
            })
            .catch(err => {
                setPending(false);
                setError(err.message);
            })
       
    }, [location]);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    window.scrollTo(0, 0)
    const [bool, setbool] = useState(false);
    const [product, setProduct] = useState(null);
  return(
      <>
          <br />   <br />  <br /><br /><br />
          {bool && <div className='ViewCon'> <View product={product} func={setbool} /></div> }
          {err && <div> {err}</div>}
          {isPending && <div> FECHING </div>}
         
              <div className='pcontain'>
                  <div className='cont2'>
                      {data && data.map((pro) => (
                          <Product key={pro.id} product={pro} func1={setbool} func2={setProduct} />
                      )
                  )}
                  {
                      !data.length && <div><h1>NO PRODUCT FOUND </h1></div>
                  }
                  </div>
              </div>
    </>
  );
}
 export default PList;
