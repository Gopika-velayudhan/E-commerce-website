
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Data } from '../MainRouter';
// import { BsCartFill } from 'react-icons/bs';
// import { MdAdminPanelSettings } from 'react-icons/md';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {   faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
// import {toast} from 'react-hot-toast'
// import Logo3 from '../Assests/Logo3.jpeg';
// import { useContext } from 'react';
// import { AiOutlineLogout } from "react-icons/ai";


// function Navbar1() {
//   const navigate = useNavigate();
//   const { login, setLogin, setSearch,loginUser,setCart,} = useContext(Data);

//   const logout = () => {
    
    
//     setCart([]);
//     setLogin(false);
//     navigate('/');
    
//     toast.error('You have logged out');
//   };

//   const carticon = () => {
//     if (login) {
//       navigate('/Cart1');
//     } else {
//       toast.error('Please Login');
//     }
//   };

  
  

  
  
    
  
  
  
//   return (
//     <div className='navba'>
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//        <img src={Logo3} alt='Logo' className='logo'></img>
//         <Navbar.Brand href="/" >
//         <span style={{ fontSize: '2rem', fontWeight: 'bold', color:"goldenrod",  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',fontFamily: 'cursive' }}>Happy</span>
//               <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black', fontFamily: 'cursive'}}>Tails</span>
//         </Navbar.Brand>
        
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
            
//           >
//             <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
//             <Nav.Link onClick={()=>navigate('/Shop')}>Shop</Nav.Link>
          
            
//             <NavDropdown title="Cats" id="navbarScrollingDropdown">
//               <NavDropdown.Item onClick={()=>navigate('/Cfood')}>Food</NavDropdown.Item>
//               <NavDropdown.Item onClick={()=>navigate('/Cass')}>Accessories</NavDropdown.Item>
//               <NavDropdown.Item onClick={()=>navigate('/Ctoy')}>
//                 Toys
//               </NavDropdown.Item>
//               {/* </NavDropdown><div className="0333"> */}
                
//               </div>
//               <NavDropdown title="Dogs" id="navbarScrollingDropdown" >
//               <NavDropdown.Item  onClick={()=>navigate('/Dfood')}>Food</NavDropdown.Item>
//               <NavDropdown.Item onClick={()=>navigate('/Dass')}>Accessories</NavDropdown.Item>
//               <NavDropdown.Item onClick={()=>navigate('/Dtoy')}>
//                 Toys
//               </NavDropdown.Item>
//               </NavDropdown>
          
            
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//               onChange={(evt)=>setSearch(evt.target.value)}>
//              </Form.Control>
//              <FontAwesomeIcon icon ={faMagnifyingGlass} className='search' onClick={()=>navigate("/Search")}/>


           

//              </Form>
//              <Nav className="d-flex my-3 nav-left  fw-bold float-right" navbarScroll>
//              {login === false ? (
//                 <Nav.Link className="text mt-3 mb-3" onClick={() => navigate('/Login')}>
//                    <FontAwesomeIcon icon={faUser} style={{marginTop:"15px"}}/>
//                 </Nav.Link>
//               ) : (
//                 <>
                
//                   <Nav.Link className="text-black">{loginUser.userName}</Nav.Link>
//                   <Nav.Link className="text-black" onClick={logout}>
//                   <AiOutlineLogout />
 
//                   </Nav.Link>
                  
//                   </>
//               )}


//                 <Nav.Link className="text mt-3 mb-3" onClick={carticon}>
//                    < BsCartFill style={{marginTop:"10px"}}/>
//                 </Nav.Link>

//                 <Nav.Link className="text mt-3 mb-3" onClick={()=>navigate('/adminlogin')}>
//                    < MdAdminPanelSettings style={{marginTop:"10px"}}/>
//                 </Nav.Link>


                 
                
            
//              </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>

              
             
            
              
             
//   );
// }

// export default Navbar1;


