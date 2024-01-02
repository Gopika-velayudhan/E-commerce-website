import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "../Pages/Register2";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

import { Product } from "./Product/Product";
import Dog from "./Product/Dog";
import Cat from "./Product/Cat";
import Cfood from "./Product/Cfood";
import Dfood from "./Product/Dfood";
import Ctoy from "./Product/Ctoy";
import Dtoy from "./Product/Dtoy";
import Cass from "./Product/Cass";
import Dass from "./Product/Dass";
import Shop from "../Pages/Shop";
import Payment from "../Pages/Payment";
import Viewproduct from "../Pages/Viewproduct";
import { Footer } from "./Footer"; 
import { Route,Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { createContext,useState } from "react";
import Search from "../Pages/Search";
import Cart1 from '../Pages/Cart';
import SideBar from "../Components/Sidebar";
import AdminHome from "../Pages/AdminHome";
import AdminLogin from "../Pages/AdminLogin";
import AdminProduct from "./Admin/AdminProduct";
import AddProduct from "./Admin/Addproduct";
import Editpro from "./Admin/Editpro";
import Users from "./Admin/Users";
 import Vieworder from "./Admin/Vieworder";





export const Data = createContext();

function MainRouter() {
    const[userData,setUserData] = useState([{
        userName : "gopika",
        emailId : 'gopikakv@gmail.com',
        phoneNumber : 7736730305,
        password : 11111111,
        confirmpassword : 11111111,
        cart : []
        





    }]);
    const[login,setLogin]=useState(false);
    const [loginUser, setLoginUser] = useState([])
    const [product,setProduct] = useState(Product);
    const [cart,setCart] = useState([]);
    const [vieworder,setViewOrder] = useState([]);
    const [search,setSearch] = useState("")
    


    
    

    
    

    return(
        <div className="main">
        
            <Data.Provider value={{userData,setUserData,login,setLogin,loginUser,setLoginUser,product,setProduct,cart,setCart,vieworder,setViewOrder,search,setSearch,}}>
            <Toaster position="top-center"/>
        
            <Routes>
                    
                   
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Registration" element={<Registration/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Cat" element={<Cat/>}/>
                    <Route path="/Dog" element={<Dog/>}/>
                    <Route path="/Cfood" element={<Cfood/>}/>
                    <Route path="/Dfood" element={<Dfood/>}/>
                    <Route path="/Ctoy" element={<Ctoy/>}/>
                    <Route path="/Dtoy" element={<Dtoy/>}/>
                    <Route path="/Cass" element={<Cass/>}/>
                    <Route path="/Dass" element={<Dass/>}/>
                    <Route path="/Shop" element={<Shop/>}/>
                    <Route path="/viewproduct/:id" element={<Viewproduct/>}/>
                    <Route path="/Cart1" element={<Cart1/>}/>
                    <Route path="/Payment" element={<Payment/>}/>
                     <Route path="/Search" element={<Search/>}/> 
                     <Route path="/Sidebar" element={<SideBar/>}/>
                     <Route path="/adminlogin" element={<AdminLogin/>}/>
                     <Route path="/admin" element={<AdminHome/>}/>
                     <Route path="/adminproduct" element={<AdminProduct/>}/>
                     <Route path="/addproduct" element={<AddProduct/>}/>
                     <Route path="/editpro/:id"  element={<Editpro/>}/>
                     <Route path="/users" element={<Users/>}/>
                       <Route path="/vieworder" element={<Vieworder/>}/> 
                    
                    
                    

                    
                    

                    
                    
                
                </Routes>

            </Data.Provider>
        
            
            <Footer />
        </div>
    )
    
}
 export default MainRouter;