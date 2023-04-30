import Home from "./components/routes/home/home.component"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/routes/navigation/navbar.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component"
import CheckOut from "./components/routes/checkout/checkout.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<CheckOut/>} />
        <Route path="auth" element={<Authentication />} />
      </Route>
     
    </Routes>
  );
}

export default App;
