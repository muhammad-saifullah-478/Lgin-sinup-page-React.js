import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from "./LoginSinup/Homepage"
import Login from "./LoginSinup/Login"
import Sinup from "./LoginSinup/sinup";
import { Blog } from "./LoginSinup/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage/> } ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/" element={<Sinup />} ></Route>
        <Route path="blog" element={<Blog />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
