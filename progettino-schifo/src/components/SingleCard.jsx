import { useState } from 'react';
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleCard = ({ book }) => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <Card
        className="m-auto"
        key={book.asin}
        style={{ width: "18rem", height: "100%", border: selected && '5px solid yellow' }}
      >
        <Card.Img variant="top" src={book.img} onClick={() => setSelected(!selected)} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.asin}</Card.Text>
          <Button variant="primary">Pigliatelo sto libro</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleCard;
