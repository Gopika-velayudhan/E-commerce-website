import React, { useContext } from 'react';
import { Data } from '../Components/MainRouter';
import { useNavigate } from 'react-router-dom';
import { Card,Button,CardGroup } from 'react-bootstrap';
import Navbar1 from '../Components/Navbar/Navbar2';

const Shop = () => {
    
    const navigate= useNavigate();
    const { product } = useContext(Data);
  return (
    <>
    <Navbar1/>
    <div className='container'>
    <div className='row'>
        {product.map((item)=>(
            <CardGroup className='col-6 col-md-3' key={item.id} >
                <Card className='m-2 mt-4 md-3'>
                    <Card.Img style={{maxHeight:'12rem'}} src={item.image}/>
                    <Card.Body>
                        <Card.Text>{item.title}</Card.Text>
                        <Card.Text> Rs{item.price}</Card.Text>
                        <Button variant='warning' style={{margin:'2px'}} onClick={()=>navigate(`/viewproduct/${item.id}`)}>View Product</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        ))}
    </div>
    </div>
    </>
  )
}
export default Shop