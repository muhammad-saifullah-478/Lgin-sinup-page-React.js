import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

const Homepage = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Welcome Home PAge</h1>
        <button onClick={logout}>Logout</button>
       </div>
       <div className="image">
        <img
          src="https://springboard.com/blog/wp-content/uploads/2022/06/what-does-a-coder-do-2022-career-guide-1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div style={{ marginTop: "5px", color: "blue" }}>
          <h3 style={{ fontSize: "15px", fontWeight: "22px" }}>
            what is web development
          </h3>
        </div>
        <div>
        The process of creating, building, and maintaining websites for the internet or intranet
        </div>
       
        
      </div>
    </>
  );
};

export default Homepage;
