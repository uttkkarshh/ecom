import { Link } from "react-router-dom";
function Element({name}) {


  return (
    <>
    <div className={`${name}`}>
     <img src={ `image/${name}.jpg`} className='image' height='200px'/>
              <Link to='/PrList' state={{ desc: ` ${name}` }} className='Gridl'>{name}</Link>
    </div>
    </>
  );
}

export default Element;
