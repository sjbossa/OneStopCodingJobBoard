import React from 'react';

const TeamInfo = ({ img, title, description, id }) => {
  return (
    <main>
      <div className="card">
        <div className="card__body">
          <img className="card__image" src={img} alt="Scott" />
          <h2 className="card__title">Scott Bossard</h2>
          <p className="card__description"></p>
          
        </div>
      </div>

      <div className="card">
        <div className="card__body">
          <img className="card__image" src={img} alt="Reynaldo" />
          <h2 className="card__title">Reynaldo Velez</h2>
          <p className="card__description">Aspiring backend developer with an associates in computer science, currently pursuing a bachelors at Eastern New Mexico University. 
          I enjoy long walks from the fridge back to my chair where I program applications with a specialization in the backend. </p>
         
        </div>
      </div>

      <div className="card">
        <div className="card__body">
          <img className="card__image" src={img} alt="Zach" />
          <h2 className="card__title">Zach Hanson</h2>
          <p className="card__description">Up and coming backend developer, Father of 2 beautiful kids with a love for developing code and programming.</p>
        
        </div>
      </div>
    </main>
  );
};

export default TeamInfo;