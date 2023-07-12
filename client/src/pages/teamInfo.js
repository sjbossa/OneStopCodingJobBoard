import React from 'react';

const TeamInfo = ({ img, title, description, id }) => {
  return (
    <main>
      <div className="card">
        <div className="card__body">
         
          <h2 className="card__title">Scott Bossard</h2>
          <p className="card__description"> My name is Scott Bossard and I am 53 years old. I have been happily married to my wife Cynthia for 29 years, and we have raised two sons and a daughter aged 28, 24 and 20 here in San Antonio, Texas. 
          I recently retired from the United States Navy where I served honorably as a Cryptologic Technician for 22 years. I am currently participating in a Full stack bootcamp at the University of Texas San Antonio, learning software engineering skills in both front and back-end web development. My military leadership experience provides me strength in meeting deadlines, problem solving, and thriving in robust teamwork oriented environments. My hobbies include fishing, rock/fossil hunting, camping, hiking and lapidary arts.</p>
          
        </div>
      </div>

      <div className="card">
        <div className="card__body">
       
          <h2 className="card__title">Reynaldo Velez</h2>
          <p className="card__description">Aspiring backend developer with an associates in computer science, currently pursuing a bachelors at Eastern New Mexico University. 
          I enjoy long walks from the fridge back to my chair where I program applications with a specialization in the backend. </p>
         
        </div>
      </div>

      <div className="card">
        <div className="card__body">
          
          <h2 className="card__title">Zach Hanson</h2>
          <p className="card__description">Currently enrolled in the UTSA full stack coding bootcamp, Father of 2 beautiful kids with a love for developing code and programming.
          My hobbies include Running, camping, nature and wildlife photography, and working on cars.</p>
        
        </div>
      </div>
    </main>
  );
};

export default TeamInfo;