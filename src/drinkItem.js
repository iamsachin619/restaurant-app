import './Item.css'
function DrinkItem(props){
    return(
        <div className="item-container">
            <div>
                 {props.food.cocktail?<span className="veg"><b>Cocktail</b>&nbsp;</span>:<span className="non-veg"><b>Mocktail</b></span>}
                 &nbsp;&nbsp;&nbsp;{props.food.name}
            </div>
            <div>
                <b>Rs.{props.food.cost}</b> &nbsp;&nbsp;&nbsp;
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default DrinkItem;