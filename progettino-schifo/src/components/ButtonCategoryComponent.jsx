import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import FantasyBooks from "../assets/books/fantasy.json";
import HistoryBooks from "../assets/books/history.json";
import HorrorBooks from "../assets/books/horror.json";
import RomanceBooks from "../assets/books/romance.json";
import ScifiBooks from "../assets/books/scifi.json";

const ButtonCategoryComponent = ({setCategory}) => {
  return (
    <Container className="my-5">
      <Button className="btn btn-success mx-2" onClick={() => setCategory(FantasyBooks)}>Fantasy</Button>
      <Button className="btn btn-info mx-2 " onClick={() => setCategory(HistoryBooks)}>History</Button>
      <Button className="btn btn-danger mx-2" onClick={() => setCategory(HorrorBooks)}>Horror</Button>
      <Button className="btn btn-secondary mx-2" onClick={() => setCategory(RomanceBooks)}>Romance</Button>
      <Button className="btn btn-warning mx-2" onClick={() => setCategory(ScifiBooks)}>Scifi</Button>
    </Container>
  );
};

export default ButtonCategoryComponent;
