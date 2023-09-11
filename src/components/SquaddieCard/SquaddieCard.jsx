import { useState } from 'react';
import Stats from './Stats';
import './squaddieCard.css'

const SquaddieCard = ({
  id,
  type,
  color, 
  name,
  subType,
  img, 
  skill1,
  skill2,
  skill3,
  strength,
  upgradeStrength,
  health,
  upgradeHealth,
  isAvailable,
  isChosen}) => {
    
    // const [isAvailable, setAvailability] = useState(isAvailable);
    // const [isChosen , setChosen] = useState(isChosen);

  return (
    <div className={isAvailable ? 
      "squaddie squaddie-" + color :
      "squaddie squaddie-unavailable"} >
  <header>
    <h6 className="tk-lunatix">{isAvailable? type.toUpperCase() : "LOCKED"}</h6>
  </header>
  <section>
    <h2 className="tk-hwt-artz text-shadow-long">{name.toUpperCase()}</h2>
    <h6 className="tk-lunatix text-shadow-short">{subType.toUpperCase()}</h6>
    <img className="character" src={img} alt={name} />
    <img className="shadow" src="/assets/squaddies/shadow.svg" alt="just a shadow" />
    <ul className="tk-hwt-artz">
      <li>{skill1}</li>
      <li>{skill2}</li>
      <li>{skill3}</li>
    </ul>
    <div className="squaddie-stats-container">
      <Stats type="strength" value={strength} upgradePrice={upgradeStrength}/>
      <Stats type="health" value={health} upgradePrice={upgradeHealth}/>
    </div>
    <button className={ isChosen ? 
                        "remove-squaddie-btn red-btn" : 
                        "add-squaddie-btn green-btn" 
                        + "btn tk-hwt-artz green-btn" }>
      <span>{isChosen ? "-" : "+" + "SQUAD"}</span>
    </button>
  </section>
</div>

  );
};
export default SquaddieCard;