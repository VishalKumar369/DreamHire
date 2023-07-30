import React from 'react';
import { motion } from 'framer-motion';
import SignUp from './SignUp';
import Login from './Login';

const Modal = ({ handleClose, isSignUp }) => {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div className="modal-overlay" variants={modalVariants} initial="hidden" animate="visible" onClick={handleClose}>
      <motion.div className="modal-content" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        {isSignUp ? (
          <>
            <SignUp handleClose ={handleClose}/>
          </>
        ) : (
          <>
            <Login handleClose ={handleClose}/>
          </>
        )}
        {/* <button className="close-button" onClick={handleClose}>
          Close
        </button> */}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
