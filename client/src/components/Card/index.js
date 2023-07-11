import React from "https://cdn.skypack.dev/react@17.0.1";
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
          title={job.title}
          description={job.description}
        />
      ))}

      <Card
        img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30 minute meal!"
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
      <button className="card__btn">View Job</button>
    </div>
  );
}

export default JobCard;