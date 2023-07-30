import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 1 } },
  };

  return (
    <motion.section className="hero" id="home" variants={heroVariants} initial="hidden" animate="visible">
        <div className='overlay-img'></div>
      <motion.div className="hero-content">
        <motion.h1 initial={{ y: -50 }} animate={{ y: 0, transition: { delay: 0.2, duration: 0.8 } }} style={{textShadow: "2px 2px 5px #000"}}>
          Your Next Dream Team Awaits
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.8 } }} style={{textShadow: "2px 2px 5px #000"}}>
          Find top talents in Software Engineering, Product Management, Data Science, and more.
        </motion.p>
        {/* Search bar code can be added here */}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
