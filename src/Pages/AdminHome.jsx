import { useContext } from "react";
import SideBar from "../Components/Sidebar";
import Card from "react-bootstrap/Card";
import { Data } from "../Components/MainRouter";
import { useNavigate } from "react-router-dom";


const AdminHome = ()=>{
    const {userData,vieworder} = useContext(Data)
    const navigate = useNavigate();
    return(
    <div className='d-flex bg-secondary w-100 flex-wrap-wrap'>
  <div>
  <SideBar/>
  </div>
<div>

<div >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2 m-2 bg-success" 
          onClick={()=>navigate("/users")} 
        >
          <Card.Header>USERS</Card.Header>
          <Card.Body>
            <Card.Title> USERS </Card.Title>
            <Card.Text>
       <h1>  {userData.length} </h1>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>

        <div >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2  m-2 bg-success" 
          onClick={()=>navigate("/vieworder")}
        >
          <Card.Header> ORDERS</Card.Header>
          <Card.Body>
            <Card.Title> ORDERS </Card.Title>
            <Card.Text>
          <h1>     {vieworder.length} </h1>   
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        
        <div >
        <Card 
          style={{ width: '18rem' }}
          className="mb-2  m-2  bg-success"
        >
          <Card.Header> Delivered</Card.Header>
          <Card.Body>
            <Card.Title> Delivery </Card.Title>
            <Card.Text>
      <h1>  {vieworder.length} </h1>  
             
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
       
</div>


    </div>
  )
}
export default AdminHome
