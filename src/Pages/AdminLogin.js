import { useRef } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AdminLogin = ()=>{
    const navigate = useNavigate()
    const user = useRef();
    const pass = useRef();
    const sub = ()=>{
        const username = user.current.value;
        const password = pass.current.value;
        if(username === "Gopika" && password === "admin"){
            navigate("/admin")
        }else{
            toast.error("username or password is incorrect")
        }
    }
    return(
        <div>

        <div>
        
         <div  className='shadow p-3 mb-5 bg-white rounded m-3  ' style={{width:"25rem", height:"55vh", margin:"auto" ,marginTop:"10%"}}>  
         <h1 className='text-secondary'>ADMIN LOGIN</h1>
         <input  className='mt-5'   style={{height:"3rem",width:"20rem"}} placeholder='username'  ref={user}   />
         <br/>
          
         <br/>
         <input  type='password'   style={{height:"3rem",width:"20rem"}}  placeholder='password' ref={pass}  />
         <br/>
         <h6  className='mt-3 text-primary'>forget password</h6>
         
         
         
         
        
         <Button  className='mt-3'  variant="success"  onClick={sub} > Login </Button>
         
         </div>
         
             </div>
        
        
        
        
        
            </div>
    )
}
export default AdminLogin;
