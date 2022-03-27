import './Item.css'
function Item(props){
    return(
        <div className="item-container">
            <div>
                 {props.food.veg?<span className="veg"><b>Veg</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>:<span className="non-veg"><b>Non-Veg</b></span>}
                 &nbsp;&nbsp;&nbsp;{props.food.name}
            </div>
            <div>
                <b>Rs.{props.food.cost}</b> &nbsp;&nbsp;&nbsp;
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default Item;