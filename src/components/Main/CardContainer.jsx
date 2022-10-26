import { data } from "../../helper/data";
import Card from "./Card";

const CardContainer = () => {
  const cards = data.map((place) => {
    return <Card key={place.id} place={place} />;
  });

  return <div className="card-container">{cards}</div>;
};

export default CardContainer;
