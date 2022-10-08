import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Home  from './Home';
import Footer from './Components/footer';
import PrList from './PrList'
import Cart from './Components/Cart'

function App() {
  return (
<>
  <BrowserRouter>
    <Nav/>
      <Routes>
                  <Route index element={<Home />} />
                  <Route path='/PrList' element={<PrList />} />
                  <Route path='/Cart' element={<Cart />} />
      </Routes>
    <Footer/>
  </BrowserRouter>

</>
  );
}


export default App;
