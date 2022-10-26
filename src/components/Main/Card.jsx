import { GoLocation } from "react-icons/go";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.place.imageUrl} alt={props.place.title} />
      <div className="place">
        <div className="location">
          <div className="icon-country">
            <GoLocation className="icon" />
            <h5 className="country">{props.place.location.toUpperCase()}</h5>
          </div>
          <a href={props.place.googleMapsUrl} className="maps-link">
            View on Google Maps
          </a>
        </div>
        <h3 className="place-name">{props.place.title}</h3>
        <div className="dates">
          <span className="dates-span">{props.place.startDate}</span> -
          <span className="dates-span">{props.place.endDate}</span>
        </div>
        <p className="desc">{props.place.description}</p>
      </div>
    </div>
  );
};

export default Card;
