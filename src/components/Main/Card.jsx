import { CiLocationOn } from "react-icons/ci";

const Card = () => {
  return (
    <div className="card">
      <img src="https://goo.gl/maps/1DGM5WrWnATgkSNB8" alt="" />
      <div className="place">
        <div className="location">
          <CiLocationOn />
          <h5 className="country">Japan</h5>
          <a href="" className="maps-link">
            View on Google Maps
          </a>
        </div>
        <h3>Mount Fuji</h3>
        <div className="dates">
          <span>12 Jan, 2021</span> - <span>24 Jan, 2021</span>
        </div>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
};

export default Card;
