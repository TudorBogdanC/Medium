import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonCategoryComponent from "./ButtonCategoryComponent";


const AllBooksComponent = () => {
  const [category, setCategory] = useState([]);
  console.log(category);
  return (
    <>
    <ButtonCategoryComponent setCategory={setCategory}/>
      <div className="d-flex flex-wrap">
        {category.map((book, index) => {
          return (
            <Card className="m-auto" key={book.asin} style={{ width: "18rem", height: "100%" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.asin}</Card.Text>
                <Button variant="primary">Pigliatelo sto libro</Button>
              </Card.Body>
            </Card>
          );
        })}
       </div>  
    </>
  );
};

export default AllBooksComponent;
