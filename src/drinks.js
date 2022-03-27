import './foodItems.css'
import DrinkItem from './drinkItem'
function Drinks(props){
    return (
        <div className='course-Container'>
            <h3>{props.data.courseName}</h3>
            {
                props.data.items.map((food)=>{
                    return <DrinkItem food={food}/>
                })
            }
                {/* <Item food={props.data.items[0]}/> */}
               
            
        </div>)
}

export default Drinks;