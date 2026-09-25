import { useState } from 'react'
import Login from './Loginpage'
import { Routes, Route ,Link} from "react-router";
import './register.css'

function Register() {
    const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const[result,setResult]=useState({})
  const [email, setEmail] = useState("")

function Checkpassword() {
   
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let err = {}
    if (!passwordRegex.test(number)) {
      err.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character";
    //   return;
    }
    
 const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name)) {
      err.name = "Name must contain only letters";
    }
   
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    err.email = "Please enter a valid email address";
    // return;
  }
  if (number === "" || number1 === "") {
    err.password = "Enter password";
  }
  else if (number !== number1) {
    err.password = "Passwords do not match";
  }
  if(number2.length>10){
    err.number2="number must be in 10 digits"
  }
  if (Object.keys(err).length === 0) {
    err.success = "Registration Successful";
  }
  setResult({...err});
}

  return (
    <div className='register_container'>
          <h2 className='register_head'>Registration</h2>
            <input className='register_input' type='text' value={name} placeholder='enter name' onChange={(e)=>setName(e.target.value)}/><br></br>
            {result.name && <p style={{color: 'red'}}>{result.name}</p>}
             <input className='register_input' type='number' value={number2} placeholder='enter number' onChange={(e)=>setNumber2(e.target.value)}/><br></br>
            {result.name && <p style={{color: 'red'}}>{result.number2}</p>}
          <input className='register_input' type='email' value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/><br></br>
          {result.email && <p style={{color: 'red'}}>{result.email}</p>}
         <input className='register_input' type='text' value={number} placeholder='enter password' onChange={(e)=>setNumber(e.target.value)}/><br></br>
        <input className='register_input' type='text' value={number1} placeholder='confirm password' onChange={(e)=>setNumber1(e.target.value)}/><br></br>
            {result.password && <p style={{color: 'red'}}>{result.password}</p>}
       { result.success && <p style={{color: 'green'}}>{result.success}</p>}
       <div>
        <button className='register_button'
          type="button"
          onClick={Checkpassword} style={{ margin: '5px' }} >
          Register
        </button >
           <Link to="/login">
       <button className='register_button1' >
        Login
      </button>
       </Link>
        {/* <h3>{result}</h3> */}
        </div>
    </div>
  );
}
export default Register;