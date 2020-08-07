import React from 'react'
import '../styles/css/Modal.scss'

const Modal = (visible) => {
  return (
    <>
      <div className={visible ? "modalClose" : "modalOverlay"} />
      <div className={visible ? "modalClose" : "modalWrapper"} >
        <div className="modalInner">  
          <div>hello</div>
        </div>
      </div>
    </>
  )
}

export default Modal;