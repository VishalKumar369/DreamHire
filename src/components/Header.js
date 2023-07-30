import React, { useState } from 'react';
import Modal from '../components/Modals'; // Import the Modal component
import '../App.css'

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setShowModal(true);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header>
      <div className="logo" style={{fontSize:"20px", fontWeight:"700"}}>
        DreamHire
        {/* <img src={logo} alt="Company Logo" /> */}
      </div>
      <nav>
        <ul style={{alignItems:"center" , margin:"0"}}>
          <li><a href="#home">Home</a></li>
          <li><a href="#roles">Roles</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cta" style={{display:"flex", width:"360px"}}>
        <button onClick={handleSignUpClick} style={{marginRight:"10px"}}>Sign Up</button>
        <button onClick={handleLoginClick}>Log In</button>
      </div>
      {showModal && <Modal handleClose={handleCloseModal} isSignUp={isSignUp} />}
    </header>
  );
};

export default Header;
