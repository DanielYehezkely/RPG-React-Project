import { statsItems } from "../../utils/stats-items.js"
import Stats from "./stats";
const StatsContainer = () => {
    return (
        <div className="modal-stats-items-container">
            {statsItems.map((item, index) => (
                index === 0 ?
                <Stats key={item.id} id={item.id} name={item.name} precision={item.precision} kills={item.kills} category={item.category} />
                 :
                <Stats key={item.id} value={item.value} category={item.category} />
                )  
            )}            
        </div>
    )
}


export default StatsContainer;
