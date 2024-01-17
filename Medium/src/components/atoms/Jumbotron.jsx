import { Button } from "react-bootstrap";

const Jumbotron = () => {
    return (
        <div className="d-flex justify-content-between" style={{borderBottom: "1px solid black", backgroundColor: "#ffc017", height: "100%"}}>
            <div className="mx-4 p-4">
                <h1 className="titleBig">Stay curious.</h1>
                <div style={{padding: "10px 30px", fontSize:"25px", fontWeight:"300", lineHeight:"1"}}>
                    <p>
                        Discover stories, thinking, and expertise 
                        <br/>from writers on any topic.
                    </p>
                    <p className="my-5">
                    <Button variant="dark" className="px-5 fs-5 rounded-pill">Start reading</Button>
                    </p>
                </div>
            </div>    
        </div>
    )
}

export default Jumbotron;