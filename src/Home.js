//import { useState, useEffect } from 'react';

import Grid from './Components/grid'
import Section from './Components/Section'

function Home(){
  return(
      <>
          <br />   <br />  <br /><br /><br />
   <div className="cate">
   <Section  name='men'/>
   <Section  name='women'/>
   <Section  name='F'/>
   </div>
          <Grid />

    </>);
}


export default Home;
