import { Button } from 'antd'
import React from 'react'
import "./index.css"

const Show = ({closeModal}) => {
  return (
    <>
    <div className="modal-wrapper">
    <div className="modal-container">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam odit maiores est impedit tempora recusandae sint quas omnis magnam mollitia?</p>
        <Button className='model-btn' onClick={closeModal}>Accepted</Button>
    </div>
        </div>
      </>
  )
}

export default Show