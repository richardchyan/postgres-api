import React from 'react'
import { MdClose } from 'react-icons/md';

const Modal = ({ children, closeModal }) => {

   return (
      // modal backdrop
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 text-center">
         {/* actual modal */}
         <div className="bg-white p-10 rounded-lg w-4/5 max-w-screen-md mt-40 m-auto">
            <div className="flex justify-end my-4">
               <button className="text-4xl" onClick={closeModal} >
                  <MdClose className="text-black"/>
               </button>
            </div>
            {children}
         </div>
      </div>
   )
}

export default Modal
