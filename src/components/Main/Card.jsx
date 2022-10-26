import { CiLocationOn } from "react-icons/ci";

const Card = (props) => {
  console.log(props.place);
  return (
    <div className="card">
      <img src={props.place.imageUrl} alt={props.place.title} />
      <div className="place">
        <div className="location">
          <CiLocationOn />
          <h5 className="country">{props.place.location}</h5>
          <a href={props.place.googleMapsUrl} className="maps-link">
            View on Google Maps
          </a>
        </div>
        <h3>{props.place.title}</h3>
        <div className="dates">
          <span>{props.place.startDate}</span> -
          <span>{props.place.endDate}</span>
        </div>
        <p>{props.place.description}</p>
      </div>
    </div>
  );
};

export default Card;
