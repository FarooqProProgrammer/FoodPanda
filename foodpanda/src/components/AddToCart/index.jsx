import React, { useState } from 'react'
import "./index.css"
import Header from '../Header'
import Footer from '../Footer'
import { db } from '../Config'
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from 'react'
import axios from 'axios'
import FbImageLibrary from 'react-fb-image-grid'
import { Button,Modal } from 'antd'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AddToCart = () => {
    const [cartData,setCartData] = useState([]);
    const [ToTal, setToTal] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const MySwal = withReactContent(Swal)
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    
    setInterval(()=>{
        setIsModalOpen(false);
       
    },30000)

    useEffect(()=>{
        const list = [...cartData]
       async function get(){
            const docRef = doc(db, "/Carts/CartInfo");
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
            list.push(docSnap.data())
            console.log(docSnap.data().Price);

            var nums = docSnap.data().Price.map(function(str) {
                // using map() to convert array of strings to numbers
       
                return parseInt(str); });
                console.log(nums);
                let sum = 0;
                for (let i = 0; i < nums.length; i += 1) {
                    sum += nums[i];
                  }
                  console.log(sum);
                  setToTal(sum)

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
    const [check, setcheck] = useState(false)
    async function get(cartData1){
        console.log(cartData1);
        const list = [...first]
        await  axios.post("http://localhost:3100/CartGet",cartData1).then((res)=>{
           
            list.push(res.data)
        }).catch((e)=> console.log(e))
        setfirst(list)
        setcheck(true)
    }
    const [url, seturl] = useState([])
    React.useEffect(()=>{
        const list = [...url]
        for(var i=0;i<first.length;i++){
            console.log(first[i]);
            for(let y = 0 ;y<first[i].length;y++){
                console.log(first[i][y]);
                list.push(first[i][y].url)
            }
            
        }
        seturl(list)
        console.log(url);
    },[check === true])
   

    

   return (
    <div>
        <Header/>
        <div className="title w-full h-[70px] bg-[#e21b70] flex justify-center items-center " onClick={()=> get(newArr[0])}>
            <p className='text-white lg:text-xl font-black md:text-[16px] sm:text-[15px]'>You Have Selected Following Items</p>
        </div>
        <div className="items w-full h-auto flex justify-around items-center">
            <div className="box w-[400px] h-auto">
                <FbImageLibrary images={url}/>
            </div>
            <div className="price w-[500px] h-[400px]  flex flex-col justify-around items-center">
                    <h3 className='text-[#e21b70] text-[20px] font-black'>Thank you for shooping from Food Panda</h3>
                    <h4 className='text-[#e21b70] text-2xl font-black' >Total Price: {ToTal}</h4>
                    <div className="box">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=shah faisal town karachi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
                <Button onClick={showModal}>Shop</Button>

        </div>
       
    </div>
    <Footer/> 



    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="hero">
            <div className="highway">

            </div>
        </div>
      </Modal>

    </div>
  )
}

export default AddToCart