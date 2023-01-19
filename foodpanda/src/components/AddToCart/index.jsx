import React, { useState } from 'react'
import "./index.css"
import Header from '../Header'
import Footer from '../Footer'
import { db } from '../Config'
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from 'react'
import axios from 'axios'
import FbImageLibrary from 'react-fb-image-grid'
const AddToCart = () => {
    const [cartData,setCartData] = useState([]);
    useEffect(()=>{
        const list = [...cartData]
       async function get(){
            const docRef = doc(db, "/Carts/CartInfo");
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
            list.push(docSnap.data())
            setCartData(list)
            } else {
            console.log("No such document!");
            }
        }
        get()
   
    },[])
    


 
     
        

        const newArr = cartData.map((item)=> {
            return item.id
        })
 
       
     
  
    const [first, setfirst] = useState([])
    async function get(cartData1){
        console.log(cartData1);
        const list = [...first]
        await  axios.post("http://localhost:3100/CartGet",cartData1).then((res)=>list.push(res.data)).catch((e)=> console.log(e))
        setfirst(list)
       
    }
    console.log(first);

    

   return (
    <div>
        <Header/>
        <div className="title w-full h-[70px] bg-[#e21b70] flex justify-center items-center " onClick={()=> get(newArr[0])}>
            <p className='text-white lg:text-xl font-black md:text-[16px] sm:text-[15px]'>You Have Selected Following Items</p>
        </div>
        <div className="items w-full h-[500px] border-2 border-black flex justify-around items-center">
            <div className="box w-[400px] h-[400px] border-2 border-black">
            <FbImageLibrary images={[]}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AddToCart