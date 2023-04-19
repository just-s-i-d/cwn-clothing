import Home from "./components/routes/home/home.component"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/routes/navigation/navbar.component";
import Signin from "./components/routes/signin/signin.component";
const Shop = () => {
  return <h1>I am shop component</h1>
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop/>}/>
        <Route path="sign-in" element={<Signin/>}/>
      </Route>

    </Routes>
  );
}

export default App;
