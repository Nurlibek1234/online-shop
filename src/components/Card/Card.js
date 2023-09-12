import React from 'react';
import './Card.css'

function Card(props) {
 

  return (
      <div className="box">
        <img src={props.data.image} alt="" />
        <h2>{props.data.title.slice(0, 20)}...</h2>
        <p><span>Price:</span>{props.data.price}</p>
        <div className="boxBottom">
          <p><span>Category:</span>{props.data.category}</p>
          <p><span>Rate:</span>{props.data.rate}</p>
          <p><span>Count:</span>{props.data.count}</p>
        </div>
      </div>
  )
}

export default Card;