const Stats = ({id, name, precision, kills, category, value}) => {
  console.log("id:", id); // Log the value of id for debugging

  return (    
    <>
   { id === 'state-item-0' ? (
     <div className='stats-item-box'> 
     <div className="stats-item-first-box-inner">
     <h4 className="favorite-squaddie-name">{name}</h4>    
     <div className="favorite-squaddie-values-container">
      <div className="favorite-squaddie-icon-precision"></div>
      <p>{precision}</p>
        <div className="favorite-squaddie-icon-kills"></div>
        <p>{kills}</p>        
      </div>
      <div className="modal-stats-character-image">
      <div className="image-bald-survivor"></div>
      </div>
      </div>  
      <div className="stats-item-category"> {category} </div>
     </div> ) : (
     <div className='stats-item-box'>   
         <div className="stats-item-value"> {value} </div>
         <div className="stats-item-category"> {category} </div>
    </div>
    )}
    </>
  )
}

export default Stats
/*

   {props.id === 'state-item-0'} ?
      <div></div>
      { id: 'state-item-0' , name: 'MR. SKINNER', precision: 265, kills: 98 , category: 'FAVORITE SQUADDIE'},
      <div className="stats-item-data favorite-squaddie">{props.name}{props.name}</div> :
      <div className="stats-item-type">{props.value} {props.category}</div>

**/