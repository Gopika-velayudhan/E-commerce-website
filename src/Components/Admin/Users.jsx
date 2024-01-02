import React,{useContext} from "react";
import { Data } from "../MainRouter";
import SideBar from "../Sidebar";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { FaUserLarge } from "react-icons/fa6";



const Users = ()=>{

    const {userData} = useContext(Data);
    

    return (
        <div>
          {userData.length<=0?<h1>No User Found</h1>:<h1>User Details</h1>}
        <div className='d-flex'>
          <div>
            <SideBar />
          </div>
    
          <div className='w-100'>
            <div className='table-responsive'>
              <MDBTable responsive='sm' striped bordered>
                <MDBTableHead>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'>Username</th>
                    <th scope='col'>E-Mail</th>
              
                    
                    
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {userData.map((item) => (
                    <tr key={item.userId}>
    
                    <td>
                        <div className='d-flex align-items-center'>
                          
                             <FaUserLarge />
                          
                        </div>
                      </td>
                      <td>{item.userName}</td>
                      <td>{item.emailId}</td>
                      
                    
                      </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
         </div>
        
        
            </div>
    );
  
}
export default Users;
