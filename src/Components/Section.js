import { Outlet, Link } from "react-router-dom";
function Section({name}) {

  return (
      <div className={`${name}`}>
          <Link to='/PrList' state={{ desc: ` ${name}` }} > {name} </Link>
      </div>
  );
}

export default Section;
