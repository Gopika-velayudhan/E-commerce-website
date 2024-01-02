import { useContext,useRef,useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../MainRouter";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-hot-toast';


const Editpro = ()=>{
    const {id} = useParams();
    const titleRef = useRef(null);
    const stockRef = useRef(null);
    const priceRef = useRef(null);


    const {product,setProduct} = useContext(Data);
    const findVal = product.find((item)=>item.id === parseInt(id));

    const [formData , setFormData] = useState({
        title : findVal.title,
        stock : findVal.stock,
        price : findVal.price
    });

    const handleSave = ()=>{
        const updateedTitle = titleRef.current.value;
        const updateStock  = stockRef.current.value;
        const updatePrice  = priceRef.current.value;  
        
        
        if(!updateedTitle.trim() || !updateStock.trim() || !updatePrice.trim() ){
            toast.error("please fill in the fields");
            return;
        }
        setFormData({
            title : updateedTitle,
            stock : updateStock,
            price : updatePrice,
        });

        const updateedProduct = product.map((item)=>
            item.id === parseInt(id)
            ?{
                ...item,
                title : updateedTitle,
                stock : updateStock,
                price : updatePrice,
            }
            :item
        );
        setProduct(updateedProduct);

        toast.success("Product updated")


        
    };
    return (
        <div style={{ width: '100%', height: '40vh' }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">
                  <b>Title</b>
                </th>
                <th scope="col">
                  <b> Price</b>
                </th>
                <th scope="col">
                  <b>Stock</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key={findVal.id}>
                <td>
                  {' '}
                  <input
                    type="text"
                    ref={titleRef}
                    defaultValue={formData.title}
                  />{' '}
                </td>
                <td>
                  <input
                    type="number"
                    ref={priceRef}
                    defaultValue={formData.price}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    ref={stockRef}
                    defaultValue={formData.stock}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            className="btn btn-success m-2 mt-5"
            onClick={handleSave}
          >
            Save
          </button>
          <button type="button" className="btn btn-danger m-2 mt-5">
            Discard
          </button>
    </div>
    
    );

}

export default Editpro