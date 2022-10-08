import  { useState ,useEffect} from 'react';
function useFetch(url) {

    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [err,setError] =useState(null);

    useEffect(() => {
        const data = {
            "desc": "men"
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
  .then(res=>{
    if(!res.ok){
        throw Error('could not fetch');
    }
    return res.json();
  })
  .then(data=>{
    setData(data);
    setPending(false);
  })
  .catch(err=>{
  setPending(false);
  setError(err.message);
  })
},[]);
return {data,isPending,err};
}
export default useFetch;
