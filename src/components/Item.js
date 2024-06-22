import React, { useState } from "react";

function Item({ name, category }) {
  //create a variable using state
  const [inCart, setCart] = useState(true)
  const cartStuff = inCart ? "Add to Cart" : "Remove from Cart"

  //create new component that handles the info of in cart vs add to cart called cartContents create ternery

  function cartContents() {
    setCart((cart) => !cart)
    
  }

  const color = inCart ? "yellow" : "violet"

  return (
    <li className= {inCart? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{background: color}} onClick={cartContents} className="add">{cartStuff}</button>
    </li>
  );
}

export default Item;
