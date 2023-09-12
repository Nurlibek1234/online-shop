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

export default Card








// import React from "react";
// import { Button, Card } from "react-bootstrap";
// import './Card.css'

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;