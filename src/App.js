import Home from "./components/routes/home/home.component"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/routes/navigation/navbar.component";
import Authentication from "./components/routes/authentication/authentication.component";
const Shop = () => {
  return <h1>I am shop component</h1>
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
      </Route>

    </Routes>
  );
}

export default App;
