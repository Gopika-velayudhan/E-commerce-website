import React, { useContext, useEffect, useState } from 'react'
import { Data } from '../Components/MainRouter';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import Navbar1 from '../Components/Navbar/Navbar1';





const Cart1 = () => {
    const {  product, setViewOrder, loginUser,setCart } = useContext(Data);
    const navigate = useNavigate();
    const [cartuser, setcartuser] = useState([]);
    useEffect(()=>{
        
            setcartuser(loginUser.cart);
        
    }, [loginUser.cart]);
    console.log(loginUser,'user');
    //remove task
    const removeTask = (x) => {
        const newTask = cartuser.filter((item) => item.id !== x);
        setcartuser(newTask);
        if (loginUser) {
            loginUser.cart = newTask;
        }
        toast.error('Your product is removed');
    };
        // increase task
        const handleincrece = (x) =>{
        const productprice = product.find((item)=>item.id === x);
        const updatecart = cartuser.map((item)=>{
            if(item.id === x){
                if(item.qty <= item.stock){
                    item.qty += 1;
                    item.price= parseFloat(productprice.price)* item.qty
                }
            }
            return item;
        });
        setCart(updatecart)
        
    };
    //decease task
    const handledecrece = (x)=>{
        const productprice = product.find((item)=> item.id === x);
        const updatecart  = cartuser.map((item)=>{
            if(item.id === x){
                if(item.qty <= item.stock && item.qty > 1){
                    item.qty -= 1;
                    item.price = parseFloat(productprice.price)* item.qty
                }
            }
            return item;
        })
        setCart (updatecart)
    }

    const reducer = cartuser.reduce((total,item)=> total + parseFloat(item.price),0);
    const clear = ()=>{
        loginUser.cart=[];
        setcartuser([]);
        toast.success("Your cart is Empty")
    };

    const order =()=>{
        navigate('/payment');
        setViewOrder(cartuser)
        
        if (loginUser) {
            loginUser.cart = [];
            // setcartuser([]);
            
        }
    };
        
    
    
    
  return (
    <>
    <Navbar1/>
    <div>
     <section className='navu h-100' style={{backgroundColor:'#eee'}}>
        <MDBContainer className='py-5 h-100'>
            <MDBRow className='justify-content-center align-items-center h-100'>
                <MDBCol md='10'>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <MDBTypography tag='h3' className='fw-normal mb-0  text-black'>Shopping Cart</MDBTypography>
                        <div>
                            <p className='mb-0'>
                                <span className='text-warning'></span>
                                <a href='#!' >{reducer}<i className='fas fa-angle-down mt-1'></i></a>
                            </p>
                        </div>
                    </div>

                    {cartuser.map((item)=>(
                        <MDBCardBody className='p-4' key={item.id}>
                            <MDBRow className='justify-content-between align-items-center'>
                                <MDBCol md='12' lg='6' xl='4'>
                                    <MDBCardImage className='rounded-3' fluid src={item.image} alt='products' />
                                </MDBCol>
                                <MDBCol md='12' lg='6' xl='8'>
                                    <p className='lead fw-normal mb-2'>{item.title}</p>
                                    
                                    
                                    
                                    <p className='text-dark bold'>{item.price}</p>

                                </MDBCol>
                                <MDBCol md='12' lg='6' xl='4' className='d-flex align-items-center justify-content-around'>
                                    <button className=' border border-secondary p-2 m-1'
                                     variant='danger' 
                                     onClick={()=> handledecrece(item.id)}> - </button>
                                     <span className='border border-secondary p-3'>{item.qty}</span>
                                     <button className='border border-secondary p-2 m-1'
                                     varient='danger'
                                     onClick={()=> handleincrece(item.id)}> + </button>
                                </MDBCol>
                                <MDBCol md='12' lg='6' xl='4' className='text-end'>
                                    <a href='#!' className='text-danger'>
                                        <MDBIcon onClick={()=> removeTask(item.id)} icon='trash text-danger' size='lg' />
                                    </a>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    ))}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
     </section>
     <div>
        <h1>Total {reducer}</h1>
        <Button className='bg-info m-2 p-2' onClick={(()=>clear())}>ClearCart</Button>
        <Button className='bg-success m-2 p-2' onClick={order}>Buy All</Button>
     </div>

    </div>
    </>
  )
}

export default Cart1