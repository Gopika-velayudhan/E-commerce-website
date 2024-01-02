import React, { useContext } from 'react';
import { Data } from '../MainRouter';
import { useNavigate } from 'react-router-dom';
import { Card,Button,Row,Col } from 'react-bootstrap';
import Navbar1 from '../Navbar/Navbar1';

const Cfood = () => {
    const navigate= useNavigate();
    const { product } = useContext(Data);
    const catogery = product.filter((item)=> item.catogery === 'CFood');
  return (
          <>
          <Navbar1/>
            <Row className='m-4'>
            {catogery.map((item)=>(
             <Col key={item.id} xs={12} sm={6} md={4} lg={3} xl={3}  className='d-flex flex-wrap m-4'>
                <Card className='m-2' style={{width:'17rem'}}>
                    <Card.Img style={{width:'15rem',height:'10rem'}} variant='top' src={item.image}/>
                    <Card.Body>
                        <Card.Title className='m-2'>{item.title}</Card.Title>
                        <Card.Text><h2>Rs{item.price}</h2></Card.Text>
                        <Button onClick={()=>navigate(`/viewproduct/${item.id}`)} variant="primary" >View Products</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
       
    </Row>
    </>
  )
}

export default Cfood