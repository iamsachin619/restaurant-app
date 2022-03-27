import logo from './logo.svg';
import './App.css';
import FoodItems from './foodItems';
import Drinks from './drinks';

const menu = [
  {courseName: 'Appetizers', items: [{name:'Chips', veg:true,cost:100}, {name:'Quesadilla', veg:true,cost:150}, {name:'Nachos', veg:true,cost:120}]},
  {courseName: 'Entrees', items: [{name:'Steak', veg:false,cost:500}, {name:'Chicken', veg:false,cost:300}, {name:'Paneer', veg:true,cost:800},{name:'Fish', veg:false,cost:800}]},
  {courseName: 'Desserts', items: [{name:'Ice Cream', veg:true,cost:150}, {name:'Cake', veg:false,cost:100}, {name:'Pie', veg:false,cost:600}]},
 
]
const drinks =  {courseName: 'Drinks', items: [{name:'Beer', cocktail:false,cost:350}, {name:'Rum', cocktail:false,cost:250}, {name:'Cocktail', cocktail:true,cost:600}]}
function App() {
  return (
    <div className="App">
     <h2>Welcome to Sachin's Kitchen</h2>
     {
       menu.map(menu=>{
          return <FoodItems data={menu}/>
       })
     }
     {/* <FoodItems data={menu[0]}/> */}
    
      <Drinks data={drinks}/>
    
    </div>
  );
}

export default App;
