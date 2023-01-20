import { Button } from 'antd'
import React from 'react'
import "./index.css"
import Show from '../Show';

const Popup = ({open}) => {
  // console.log(props);
  const [Modal, setModal] = React.useState(false);

  const closeModal = ()=>{
    return setModal(false)
  }
  return (
        <>
          <Button onClick={()=> setModal(open)}>Open Modal</Button>
          {Modal &&  <Show closeModal={closeModal}/>}
         
        </>
  )
}

export default Popup