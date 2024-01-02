import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardGroup
} from 'mdb-react-ui-kit';

export default function Banner() {
  const navigate = useNavigate()
  return (
    <div className='p-5'>
        <h1>Let's Shop</h1>
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src='https://cdn.shopify.com/s/files/1/0565/8021/0861/files/194_d1cbd942-4862-44c7-ae00-4bfbcbcb8d38.png?v=1703660805' alt='...' position='top' onClick={()=>navigate("/Dfood")}/>
        <MDBCardBody>
        
          
        </MDBCardBody>
        
      </MDBCard>

      
      <MDBCard>
        <MDBCardImage src='https://cdn.shopify.com/s/files/1/0565/8021/0861/files/192.png?v=1703660804' alt='...' position='top' onClick={()=>navigate("/Dfood")} />
        <MDBCardBody>
         
          
        </MDBCardBody>
        
      </MDBCard>
      <MDBCard>
        <MDBCardImage src='https://cdn.shopify.com/s/files/1/0565/8021/0861/files/196.png?v=1703660804' alt='...' position='top' onClick={()=>navigate("/Dfood")} />
        <MDBCardBody>
    
          
        </MDBCardBody>
        
      </MDBCard >
    </MDBCardGroup>
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src='https://cdn.shopify.com/s/files/1/0565/8021/0861/files/184_2c918a6b-7ff7-46ce-92ac-e2b5225d2541.png?v=1703580686' alt='...' position='top' onClick={()=>navigate("/Cfood")}/>
        <MDBCardBody>
        
          
        </MDBCardBody>
        
      </MDBCard>

      
      <MDBCard>
        <MDBCardImage src='https://cdn.shopify.com/s/files/1/0565/8021/0861/files/190.png?v=1703580686' alt='...' position='top'onClick={()=>navigate("/Cfood")} />
        <MDBCardBody>
         
          
        </MDBCardBody>
        
      </MDBCard>
      <MDBCard>
        <MDBCardImage src='https://cdn.shopify.com/s/files/1/0565/8021/0861/files/189.png?v=1703580686' alt='...' position='top'onClick={()=>navigate("/Cfood")} />
        <MDBCardBody>
    
          
        </MDBCardBody>
        
      </MDBCard >
    </MDBCardGroup>


    
    </div>
    
  );
}
