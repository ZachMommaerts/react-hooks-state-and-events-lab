import React, { useState } from "react";

function Item({ name, category }) {
  const [ isInCart, setIsInCart] = useState(false);

  function cartClick() {
    setIsInCart(isInCart => !isInCart);
  }

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartClick}>{isInCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
