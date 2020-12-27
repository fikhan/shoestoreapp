import React from 'react';
import { Link } from 'react-router-dom';

export const ProductIndex = () => {
    const shoes = {
        "dalton-shell-cordovan-dress-boots": {
            name: "Dalton Shell Cordovan Dress Boots",
            img: 
              "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw8116ebe3/images/2.1/mens-shoes/dalton-0181-burgundy-angle-web.jpg?sw=736&sh=736&sm=fit"
        },
        "park-avenue-shell-cordovan": {
            name: "Park Avenue Shell Cordovan",
            img:
              "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwc4ea4a21/images/2.1/mens-shoes/parkave-5805-black-angle-web.jpg?sw=736&sh=736&sm=fit"
        },
        "osborn-sneaker": {
            name: "Osborn Sneaker",
            img: 
               "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwed078574/images/2.1/mens-shoes/osborn-2344-walnut-angle-web.jpg?sw=736&sh=736&sm=fit"

        }
    }
    
    
    return (
        <div> 
            Product Index
            <ul>
                {Object.entries(shoes).map(([productID,{name, img}]) => 
                  (
                    <li key={productID}>
                       <Link to={productID}>
                          
                          <h2> {name} </h2>
                          <img src={img} alt={name} />

                       </Link>
                    </li>
                  )
                )}
            </ul>
        </div>
    )
}
