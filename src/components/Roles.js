import React from 'react';

const Roles = () => {
  return (
    <section className="roles" id="roles">
      <h2>Our Hiring Specializations</h2>
      <div className="role-cards">
        {/* Add role cards here */}
        <div className="role-card">
          <h3>Software Engineers</h3>
          <p>We help you find skilled software engineers to build and scale your product.</p>
        </div>
        <div className="role-card">
          <h3>Product Managers</h3>
          <p>Find experienced product managers who can lead your product development.</p>
        </div>
        <div className="role-card">
          <h3>Data Scientists</h3>
          <p>Hire data scientists who can turn data into valuable insights for your business.</p>
        </div>
      </div>
    </section>
  );
};

export default Roles;
