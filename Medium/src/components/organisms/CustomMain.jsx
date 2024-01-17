
import { Col, Container, Row } from "react-bootstrap";
import ArticlesGallery from "../molecules/ArticlesGallery";
import NewsGallery from "../molecules/NewsGallery";
import SideComponent from "../molecules/SideComponent";


const CustomMain = () => {
    return (
        <>
            <ArticlesGallery/>
            <hr/>
            <Container>
                <Row className="mainside">
                <Col className="col-md-8" md={{ order: 1}} xs={{ order: 2}}>
                    <NewsGallery/>
                </Col>
                <Col md={{ order: 2}} xs={{ order: 1}} className="col-md-4 sidebar mb-4">
                    <SideComponent/>
                </Col>
                </Row>
            </Container>    
        </>    
    )
}

export default CustomMain;