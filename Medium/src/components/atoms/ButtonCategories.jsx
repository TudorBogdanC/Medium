import { Button, Container } from "react-bootstrap"


const ButtonCategories = (props) => {
    return (
        <>
           <Button variant="light" size="sm" className="rounded-pill m-1">{props.text}</Button>
        </>
    )
}

export default ButtonCategories;