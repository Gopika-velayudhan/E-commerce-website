import React, { useContext } from 'react';
import { Navbar, Nav, Container,NavDropdown} from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Data } from '../MainRouter';
import { Form ,} from 'react-bootstrap';
import './Navbar.css';
import { RiAdminLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Logo3 from '../Assests/Logo3.jpeg';
import { AiOutlineLogout } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faUser } from '@fortawesome/free-solid-svg-icons';
import { BsCartFill } from 'react-icons/bs';
 import { MdAdminPanelSettings } from 'react-icons/md';






const Navbar1 = () => {
  const navigate = useNavigate();
  const { login, setLogin,setSearch,loginUser,setCart} = useContext(Data);

  // console.log("gopz",loginuser)

  const logout = () => {
    setCart([])
    setLogin(false);
    navigate('/');
    toast.error('You have logged out');
    
  
  };

  const carticon = () => {
    if (login) {
      navigate('/Cart1');
    } else {
      toast.error('Please Login');
    }
  };

   

  return (
    <div>
      <Navbar expand="lg" className="body-primary ">
        <Container fluid>
          <Navbar.Brand href="/" className="company-logo">
          <img src={Logo3} alt='Logo' className='logo'></img>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'goldenrod',  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Happy</span>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black', fontFamily: 'cursive' }}>Tails</span>
        
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          

          <Navbar.Collapse id="responsive-navbar-nav"  >
    

        
            <Nav className="me-auto my-2 my-lg-0 fw-bold mb-8" style={{ maxHeight: '50px' }} navbarScroll variant="black">
            
            <Nav.Link onClick={()=>navigate('/')}>HOME</Nav.Link>
             <Nav.Link onClick={()=>navigate('/shop')}>SHOP</Nav.Link>
             <NavDropdown title="Cat" id="responsive-nav">
              <NavDropdown.Item onClick={()=>navigate('/Cfood')}>Food</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/Cass')}>Toys</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/Ctoy')}>Accessories</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dog" id="responsive-nav">
              <NavDropdown.Item onClick={()=>navigate('/Dfood')}>Food</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/Dass')}>Toys</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/Dtoy')}>Accessories</NavDropdown.Item>
              </NavDropdown>


          
              
            </Nav>

            <Form className="d-flex">
             <Form.Control
              type="search"
               placeholder="Search here...."
               className="me-2 "
               aria-label="Search"
               onChange={(evt)=>setSearch(evt.target.value)} >
            </Form.Control>

           <FaSearch onClick={()=>navigate('/Search')}  className='search'/>
              </Form>


            <Nav className="d-flex my-3 nav-left  fw-bold" navbarScroll>
              {login === false ? (
                <Nav.Link className="text-black mt-4" onClick={() => navigate('/login')}>
                    <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link className="text-success">{loginUser?.userName}
                    <CgProfile />
                 </Nav.Link>
                 <Nav.Link className="text-danger" onClick={logout}>
                 <AiOutlineLogout />
                  </Nav.Link> 
                  
                  </>
                  
              )}
              
            
              <Nav.Link className="text mt-3 mb-3" onClick={carticon}>
                   < BsCartFill style={{marginTop:"10px"}}/>
                </Nav.Link>
            

                <Nav.Link className="text mt-3 mb-3" onClick={()=>navigate('/adminlogin')}>
                   < MdAdminPanelSettings style={{marginTop:"10px"}}/>
                </Nav.Link>

            

             </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;