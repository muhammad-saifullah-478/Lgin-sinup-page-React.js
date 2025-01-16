import { useState } from "react";
import Navbar from "./navbar";
// import { use } from "react";
import { useNavigate } from "react-router-dom";

// import Navbar from "./LoginSinup/Navbar";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name == "email") {
      setEmail(value);
    }
    if (name == "password") {
      setPassword(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      alert("Plaes Enter Full Filed");
    } else {
      let getDeatilas = JSON.parse(localStorage.getItem("user"));

      getDeatilas.map((curvalue) => {
        console.log(curvalue.email);
        let storeEmsil = curvalue.email;
        let setPassword = curvalue.password;
        if (storeEmsil == email && setPassword == password) {
          //  alert("sent you post")
        } else {
          return setError("Worng password or Emaiil");
        }
        navigate("/home");
      });
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <>
          <p className="errMsg">{error}</p>
          <div className="main-page">
            <form onSubmit={handleSubmit}>
              <div className="heading">
                <h1>Login Page</h1>
              </div>
              <div>
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
                  If You have To Create Account?<a href="/"> Singup</a>
                </p>
              </div>

              <button>Login</button>
            </form>
            <div>
              <img
                src="https://raw.githubusercontent.com/muhammad-saifullah-478/E-commerce-website-project/refs/heads/main/pngwing.com%201.png"
                alt="image"
              />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Login;
