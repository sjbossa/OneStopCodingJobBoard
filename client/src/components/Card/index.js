import React from "https://cdn.skypack.dev/react@17.0.1";
import { Link } from 'react-router-dom';
import './index.css';

const JobCard = ({ jobs, title }) => {
  if (!jobs.length) {
    return <h3>No jobs have been posted yet.</h3>;
  }

  return (
    <div>
      <h1>{title}</h1>
      {jobs.map((job) => (
        <Card
          img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          key={job._id}
          id={job._id}
          title={job.title}
          description={job.description}
        />
      ))}
    </div>
  );
};

function Card(props) {
  const { id, img, title, description } = props;

  return (
    <div className="card">
      <div className="card__body">
        <img className="card__image" src={img} alt="" />
        <h2 className="card__title">{title}</h2>
        <p className="card__id">{id}</p>
        <p className="card__description">{description}</p>
      </div>
      <Link to={`/job/${id}`} className="card__btn">
        View Job
      </Link>
    </div>
  );
}

export default JobCard;