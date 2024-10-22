import ProductCard from "./ProductCard"
 import Sandwitch from "../assets/baklava.jpg";
 import Brownie from "../assets/brownie.jpg";
 import Brulee from "../assets/brulee.jpg";
import Cake from "../assets/cake.jpg";


function Card () {
    
    return(
      <div className="product">
        <ProductCard 
          image= {Sandwitch}
          name="Sandwitch" 
          price="$5.00" 
          description="Yummy Sandwitch"/>
        <ProductCard image= {Brownie}
          name="Brownie" 
          price="$5.00" 
          description="Yummy Brownie"/>
        <ProductCard image= {Brulee}
          name="Brulee" 
          price="$5.00" 
          description="Yummy Brulee" />
        <ProductCard image= {Cake}
          name="Cake" 
          price="$5.00" 
          description="Yummy Cake"/>

        
      </div>
  
    );
  
  
    }
    
    export default Card;