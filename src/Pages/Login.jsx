import React,{useContext,useRef} from "react";
import { Button,Container,Row,Col } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";
import { Data } from "../Components/MainRouter";
import 'react-toastify/dist/ReactToastify.css';


const Login = ()=>{
  const {userData, setLogin,setLoginUser,loginUser} = useContext(Data);
  const navigate = useNavigate();
  const user = useRef();
  const pass = useRef();

  console.log(userData,"userdata  ")


  
  

  const logins = (e)=>{
    e.preventDefault();
    const username = user.current.value;
    const password = pass.current.value;

    



    
   

   const currentuser = userData.find((item)=>item.userName == username);
   const currentpassword = userData.find((item)=>item.password == password);
   


   
     
   
    

    if(currentuser && currentpassword ){
      setLogin(true);
      toast.success("Thank you for login");
      navigate('/');
      setLoginUser(currentuser)
      
    

    
    
    }else{
      toast.error('user not found')
      
    }
    

    
  };
  
  

  return(
    <>
  
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="shadow p-3 mb-5 bg-white rounded m-3" style={{ width: '25rem' }}>
        <Row className="mb-3">
          <Col>
            <input className="form-control" placeholder="Username" ref={user} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <input type="password" className="form-control" placeholder="Password" ref={pass} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <h6 className="text-primary">Forgot password</h6>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Button variant="success" onClick={logins} block>
              Login
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <h6 className="mt-3">
              Don't have an account? <Link to="/Registration">Registration</Link>
            </h6>
          </Col>
        </Row>
      </div>
      
    </Container>
    
    
    
    
    
    
  
  </>
  )   
  
}
export default Login
