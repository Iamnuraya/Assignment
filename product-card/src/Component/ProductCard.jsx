import './ProductCard.css'

//  import Image from "../assets/baklava.jpg"

function ProductCard (props) {
    
  return(
    <div className="product-box">
      <img src={props.image} alt="" srcset="" />
      <div className="description">
        <h2>{props.name}</h2>
        <p className="price"><small>{props.price}</small></p>
        <p className='pg'>{props.description}</p>
        <button className="btn">BUY NOW</button>
      </div>
    </div>

  );


  }
  
  export default ProductCard;