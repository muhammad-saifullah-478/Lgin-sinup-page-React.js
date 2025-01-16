// import Navbar from "./navbar";

import { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
function Sinup() {
  const userDeatle = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(userDeatle);
  const navigate = useNavigate();
  const handleInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handlesubmit = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    if (data.name == "" || data.email == "" || data.password == "") {
      alert("Plese Enter file");
    } else {
      e.preventDefault();
      const getData = JSON.parse(localStorage.getItem("user") || "[]");
      let arr = [];
      arr = [...getData];
      arr.push(data);
      localStorage.setItem("user", JSON.stringify(arr));
      // alert("singup sent succesfully")
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="main-page">
          <form onSubmit={handlesubmit}>
            <div className="heading">
              <h1>Sing Up</h1>
            </div>
            <div className="account">
              <input
                onChange={handleInput}
                type="text"
                name="name"
                placeholder=" Enter your Account Name"
              />
              <input
                onChange={handleInput}
                type="email"
                name="email"
                placeholder=" Enter your Email"
              />
              <input
                onChange={handleInput}
                type="password"
                name="password"
                placeholder=" Enter your Passowrd"
              />
              <p>
                Allready have an Account?<a href="/login"> Login</a>
              </p>
            </div>
            <button>Singup</button>
          </form>
          <div>
            <img
              src="https://raw.githubusercontent.com/muhammad-saifullah-478/E-commerce-website-project/refs/heads/main/pngwing.com%204.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sinup;
