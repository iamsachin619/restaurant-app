
import './foodItems.css'
import Item from './Item'
function FoodItems(props){
    return (
        <div className='course-Container'>
            <h3>{props.data.courseName}</h3>
            {
                props.data.items.map((food)=>{
                    return <Item food={food}/>
                })
            }
                {/* <Item food={props.data.items[0]}/> */}
               
            
        </div>)
}

export default FoodItems;