import React, { useState } from 'react'
import "./index.css"
import Header from '../Header'
import Footer from '../Footer'
import { db } from '../Config'
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from 'react'
import axios from 'axios'
const AddToCart = () => {
    const [cartData,setCartData] = useState([]);
    useEffect(()=>{
        const list = [...cartData]
       async function get(){
            const docRef = doc(db, "/Carts/CartInfo");
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
            console.log(docSnap.data());
            list.push(docSnap.data())
            setCartData(list)
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }
        get()
   
    },[])
     console.log(cartData);


 
     
        

        const newArr = cartData.map((item)=> {
            return item.id
        })
        console.log(newArr[0]);
       
     
  

    async function get(cartData1){
        console.log(cartData1);
        await  axios.post("http://localhost:3100/CartGet",cartData1).then((res)=>console.log(res.data)).catch((e)=> console.log(e))

      
    }
    

   return (
    <div>
        <Header/>
        <div className="title w-full h-[70px] bg-[#e21b70] flex justify-center items-center " onClick={()=> get(newArr[0])}>
            <p className='text-white lg:text-xl font-black md:text-[16px] sm:text-[15px]'>You Have Selected Following Items</p>
        </div>
        <div className="items w-full h-[500px] border-2 border-black">

        </div>
        <Footer/>
    </div>
  )
}

export default AddToCart