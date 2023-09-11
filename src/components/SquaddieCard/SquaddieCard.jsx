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
    <div className="squaddie-stats">
      <Stats type={strength} upgradePrice={upgradeStrength}/>
      <Stats type={strength} upgradePrice={upgradeStrength}/>
      {/* <p className="squaddie-health stats tk-hwt-artz">
        <span>
          <img className="health" src="/assets/icons/health.svg" alt="heart" />
          {health}
        </span>
      </p>
      <button type="submit" className="btn green-btn upgrade-btn">
        <span>
          <img
            className="btn-up-arrow upgrade-btn-content"
            src="../../../public/assets/icons/up-arrow.svg"
            alt="up-arrow"
          />
          <img
            className="gold-medal upgrade-btn-content"
            src="../../../public/assets/icons/gold-medal.svg"
          />
          <img
            className="gold-medal-outline upgrade-btn-content"
            src="../../../public/assets/icons/gold-medal-outline.svg"
          />
          <span className="upgrade-price upgrade-btn-content tk-hwt-artz">
            {upgradeHealth}
          </span>
        </span>
      </button>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label> */}
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