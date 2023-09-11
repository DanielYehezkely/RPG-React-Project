import {
    CardsContainer,
} from '../components';

const data = [
    { id: "1",
    type: "assault",
    color: "blue", 
    name: "sqt.murphy",
    subType: "nypd swat",
    img : "../../public/assets/squaddies/squaddie-1.svg", 
    skill1: "+high rate of fire",
    skill2: "-low damage",
    skill3: "+durable armour",
    strength : 18,
    upgradeStrength: 45,
    health : 187,
    upgradeHealth: 154,
    isAvailable : true,
    isChosen : false}, 
    { id: "2",
    type: "assault",
    color: "blue", 
    name: "sqt.murphy",
    subType: "nypd swat",
    img : "../../public/assets/squaddies/squaddie-1.svg", 
    skill1: "+high rate of fire",
    skill2: "-low damage",
    skill3: "+durable armour",
    strength : 18,
    upgradeStrength: 45,
    health : 187,
    upgradeHealth: 154,
    isAvailable : true,
    isChosen : true},
     { id: "3",
    type: "assault",
    color: "blue", 
    name: "sqt.murphy",
    subType: "nypd swat",
    img : "../../public/assets/squaddies/squaddie-1.svg", 
    skill1: "+high rate of fire",
    skill2: "-low damage",
    skill3: "+durable armour",
    strength : 18,
    upgradeStrength: 45,
    health : 187,
    upgradeHealth: 154,
    isAvailable : false,
    isChosen : true}
]

const ManageSquaddies = () => {
    console.log(data);
  return (
    <CardsContainer data={data}/>
  );
};
export default ManageSquaddies;