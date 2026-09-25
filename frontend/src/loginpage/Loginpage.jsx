import { useState } from "react";
import { Routes, Route ,Link,redirect} from "react-router";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../assets/logo1.png";
import './loginpage.css'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
   let navigate = useNavigate();


  function checkLogin() {
    if (email === "sanjithchandran5902@gmail.com" && password === "12345") {
    
       return navigate("/");
       console.log("login");
     
    } else {
      setResult("Invalid Email or Password");
       console.log("login not");
    }
  }

  return (
    <div className="login-container" >
      
          <h2 className="login_name">Login Page</h2>
       
       <Card className="login_card">

      <Card.Body className="login_cd">
        <Card.Img className="login_image" variant="top" src={logo} />

       
<div>
        <Card.Text >
           <input className="login_text"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        </Card.Text>

        <Card.Text >
               <input className="login_text"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />  

        </Card.Text>
        </div>
<div>
        <Button className="login_button1"  onClick={checkLogin}>
          Login
        </Button>
        <Link to="/register">
          <Button className="login_button2">
            Register
          </Button>
          
        </Link>
        </div>
      </Card.Body>

    </Card>
    <Link to="/forget"> 
        forget password
    </Link>
      
    <h3>{result}</h3>

    </div>
  );
}

export default Login;