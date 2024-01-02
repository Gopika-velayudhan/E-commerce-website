import React, { useContext } from 'react';
import { Data } from '../Components/MainRouter';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Navbar1 from '../Components/Navbar/Navbar1';

const Search = () => {
    const {product,search} = useContext(Data);
    const navigate= useNavigate()
    const Search = product.filter((item)=>{
        if(search === ""){
            return item;
        } else if(item.title.toLowerCase().includes(search.toLowerCase())){
            return item;

        }else{
            return "";
        }
    });
  return (
    <>
    <Navbar1/>
    <div>
      <div>
        <hr />
        <div className='d-flex' style={{justifyContent:'space-between'}}>
            <h5 className='mx-5' style={{textAlign:'center',fontSize:'2.5em',fontWeight:'bold'}}>All Products</h5>
        </div>
        <div className='d-flex flex-wrap m-3 justify-content-center'>
            {Search.map((item)=>(
                <Card onClick={()=>{navigate(`/Viewproduct/${item.Id}`)}} 
                key={item.Id}
                className='m-2'
                style={{width:'16rem',overflow:'hidden',borderRadius:'8px'}}>
                    <div style={{display:'flex',justifyContent:'center',width:'100%'}} >
                        <Card.Img className='img-fluid m-2'
                        variant='top'
                        src={item.image}
                        alt={item.catogery}
                        style={{height:'16rem',width:'12rem',objectFit:'cover'}} />
                    </div>
                    <Card.Body>
                        <h6 className='mt-1'>Rs {item.price}</h6>
                        <Card.Title style={{fontSize:'1.2rem',fontWeight:'bold',marginTop:'0.5rem'}}>{item.title}</Card.Title>
                        <Button variant='primary' style={{marginTop:'1rem'}}>View Details</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
      </div>

    </div>
    </>
  )
}

export default Search;
