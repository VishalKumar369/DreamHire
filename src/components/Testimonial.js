import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 1 } },
  };

  return (
    <motion.section className="testimonials" id="testimonials" variants={testimonialVariants} initial="hidden" animate="visible">
      <motion.h2>What Our Clients Say</motion.h2>
      <motion.div className="testimonial-cards">
        <motion.div className="testimonial-card" whileHover={{ scale: 1.05 }}>
          <motion.p>"We found our perfect candidate in no time. Highly recommended!"</motion.p>
          <motion.span>- John Doe, CEO at ABC Inc.</motion.span>
        </motion.div>
        <motion.div className="testimonial-card" whileHover={{ scale: 1.05 }}>
          <motion.p>"The platform is user-friendly and helped us hire the best talent."</motion.p>
          <motion.span>- Jane Smith, HR Manager at XYZ Corp.</motion.span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
