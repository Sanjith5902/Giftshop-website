import { useState } from 'react'
import Login from '../loginpage/Loginpage'
import { Routes, Route ,Link} from "react-router";
import './forgetlogin.css';

function Forgetlogin() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  function Checkemail() {

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setResult("Please enter a valid email address");
    } else {
      setResult("Password reset link has been sent to your email address");
    }
    
  }

  return (
    <div className='forget_container'>
      <h1 className='forget_head1' >Forget Password</h1>
      <input className='forget_input'
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button className='forget_button' onClick={Checkemail} style={{ margin: '5px' }}>
        Submit
      </button>
      <Link to="/login">
        <button className='forget_button2'>
          Login
        </button>
      </Link>
      <h3 className='forget_result'>{result}</h3>
    </div>
  );
}

export default Forgetlogin;
 