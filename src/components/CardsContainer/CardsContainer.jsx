import SquaddieCard from "../SquaddieCard/SquaddieCard";
import './cardsContainer.css'

const CardsContainer = ({data}) => {
  return (
     <div className="squaddie-container">
        {data.map(squaddie => {
            return (<SquaddieCard key={squaddie.id} {...squaddie} />)
        })}
    </div>
  );
};
export default CardsContainer;