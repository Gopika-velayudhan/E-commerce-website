import { useContext } from "react";
import { Data } from "../MainRouter";
import {FaEdit} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import SideBar from "../Sidebar";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';

const AdminProduct = ()=>{
    const navigate = useNavigate()
    const {product,setProduct} = useContext(Data);


    const removeTask = (index)=>{
        const newTask = [...product]
        newTask.splice(index,1)
        setProduct(newTask)
    }

    return(
        <div  className='d-flex '>
      <div>
<SideBar/>

      </div>
<div>
<section className="navu h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                 Product List
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-warning"> </span>
                    <a href="#!" className="text-danger">
                    <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              {product.map((item) => (
                <MDBCard key={item.id} className="rounded-3 mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          className="rounded-3"
                          fluid
                          src={item.image}
                          alt="products"
                        />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <p className="lead fw-normal mb-2">{item.title}</p>
                       
                      </MDBCol>
                      
                     

                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                     <FaEdit   
                     onClick={()=>navigate(`/editpro/${item.id}`)} />  
                    </MDBCol>
                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-danger">
                               <MDBIcon
                               onClick={() => removeTask(product.indexOf(item))}
                              icon="trash text-danger"
                                  size="lg"
                                  
                                   />
                                   </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

</div>

    
    </div>
  )
}

export default AdminProduct
    


