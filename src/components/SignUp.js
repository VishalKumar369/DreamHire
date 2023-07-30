import React from 'react';
import { motion } from 'framer-motion';

const SignUp = ({handleClose}) => {
  return (
    <motion.div className="auth-container container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <h2 style={{color:"#000"}}>Sign Up</h2>
      <form>
        <motion.div className="form-group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </motion.div>
        <motion.div className="form-group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </motion.div>
        <motion.div className="form-group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm your password" />
        </motion.div>
        <motion.button type="submit" handleClose ={handleClose} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
          Sign Up
        </motion.button>
      </form>
    </motion.div>
  );
};

export default SignUp;
