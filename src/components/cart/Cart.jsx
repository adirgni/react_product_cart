import React from 'react'

const Cart = (props) => {

  console.log("krepselis prekiu Cart", props);
  const items = props.items;

  return (
    <div>
      <p>Shopping-Bascet</p>
      {
        items.map((item, index) => (
          <div key={index}>
            <span>Item: {item.name}</span>
            <span>    Qty.: {item.quantity}</span>
          </div>
        ))}
    </div>
  )
}

export default Cart