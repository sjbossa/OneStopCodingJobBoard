import React from "https://cdn.skypack.dev/react@17.0.1";
import './index.css';
import logoImage from '../Card/images/45.jpg';
import bottomImage from '../Card/images/2877459.jpg';
const JobCard = ({ jobs, title }) => {
  if (!jobs.length) {
    return <h3>No jobs have been posted yet.</h3>;
  }

  return (
    <div>
      <h1>{title}</h1>
      {jobs.map((job) => (
        <Card
          
          
        img={logoImage}
          key={job._id}
          title={job.title}
          description={job.description}
        />
      ))}

      <Card
        img={bottomImage}
        titlebottomImage
      />
    </div>
  );
};

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img className="card__image" src={props.img} alt="" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__id">{props.id}</p>
        <p className="card__description">{props.description}</p>
      </div>
    </div>

  );
}

export default JobCard;