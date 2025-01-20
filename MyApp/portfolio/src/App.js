import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import GioiThieu from "./pages/GioiThieu/GioiThieu";
import SanPham from "./pages/SanPham/SanPham";
function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />} >
              <Route index element={<Home/>}></Route>
              <Route path="/gioithieu" element={<GioiThieu/>}></Route>
              <Route path="/sanpham" element={<SanPham/>}></Route>
          </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
