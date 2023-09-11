import { useState } from 'react';
import './stats.css'

const Stats = ({type, value, upgradePrice}) => {
  return (
    <div className='squaddie-stats'>
       <p className={`stats tk-hwt-artz squaddie-${type}`}>
        <span>
          <img className={type} src={`/assets/icons/${type}.svg`} alt={type} />
          {value}
        </span>
      </p>
      <button type="submit" className="btn green-btn upgrade-btn">
        <span>
          <img
            className="btn-up-arrow upgrade-btn-content"
            src="/assets/icons/up-arrow.svg"
            alt="up-arrow"
          />
          <img
            className="gold-medal upgrade-btn-content"
            src="/assets/icons/gold-medal.svg"
          />
          <img
            className="gold-medal-outline upgrade-btn-content"
            src="/assets/icons/gold-medal-outline.svg"
          />
          <span className="upgrade-price upgrade-btn-content tk-hwt-artz">
            {upgradePrice}
          </span>
        </span>
      </button>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
     
    </div>
     
  );
};
export default Stats;