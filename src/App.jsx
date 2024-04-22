import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";

import Footer from "./layout/Footer";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import Signin from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Bag from "./components/Bag";
import { useState } from "react";
import Error from "./pages/Error";

function App() {
  const [cartItem, setCartItem] = useState([1])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={  <>  <Navbar cartItem = {cartItem}/>  <Footer/> </> }>
            <Route path="/" element={<Home />} />
            <Route path="/CheckOut" element={<CheckOut />} />
          </Route>
          <Route path="/SignIn" element={<Signin />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="*" element={<Error/>} />


          {/* <Route element={<Footer />}>
            <Route path="/" element={<Home />} />
            <Route path="/CheckOut" element={<CheckOut />} />
          </Route> */}
        </Routes>
          {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
