import { useContext,useRef,useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Data } from "../Components/MainRouter";
import './Register2.css';



const Registration = ()=>{
  const navigate = useNavigate();
  const {userData,setUserData} = useContext(Data);
  const userNameRef = useRef(null);
  const emailIdRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmpasswordRef = useRef(null);
  const [errorMessage ,setErrorMessage] = useState('');

  const submit = (e)=>{
    e.preventDefault();
    const username = userNameRef.current.value;
  const emailId = emailIdRef.current.value;
  const  phoneNumber = phoneNumberRef.current.value;
  const password = passwordRef.current.value;
  const confirmpassword = confirmpasswordRef.current.value;

   
if(!username || !emailId || !phoneNumber || !password || !confirmpassword){
  setErrorMessage("please fill out the form");
  return;
}
const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailId);
if(!isEmailValid){
  setErrorMessage("please enter valid email address");
  return;
}
const isNumber = /^[0-9]{10}$/.test(phoneNumber);
if(!isNumber){
  setErrorMessage("please enter 10 digit number");
  return;
}
if(password.length<6){
  setErrorMessage("enter atleast 6 characters");
  return;
}
if(password !== confirmpassword){
  setErrorMessage("do not match the password");
  return;
}
setErrorMessage('');
const newUser = {userName:username,emailId:emailId,phoneNumber:phoneNumber,password:password,confirmpassword:confirmpassword,cart:[]}
setUserData([...userData,newUser]);
navigate('/Login');

};
return(
  
  <>
  
   <div className="container d-flex justify-content-center align-items-center register " style={{ minHeight: '100vh' }}>
      <div className=' rounded shadow p-3 mb-5 bg-white fom' style={{ width: '25rem'}}>
        <form>
          <h1 className='mt-3' style={{ fontFamily: 'inherit' }}>
            Registration Form
          </h1>
          <input ref={userNameRef} className='form-control mt-3' type='text' placeholder='Username' required />
          <br />
          <input ref={emailIdRef} className='form-control mt-4' type='email' placeholder='Email' required />
          <br />
          <input ref={phoneNumberRef} className='form-control mt-4' type='tel' placeholder='Mobile number' required/>
          <br />
          <input ref={passwordRef} className='form-control mt-4' type='password' placeholder='Password' required />
          <br />
          <input ref={confirmpasswordRef} className='form-control mt-4' type='password' placeholder='confirmpassword' required />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button className='btn btn-primary rounded mt-4 w-100' onClick={submit}>
            Sign up
          </button>
          <p className='mt-4'>
            Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  
  
  
  
  
  </>
);

}
export default Registration;