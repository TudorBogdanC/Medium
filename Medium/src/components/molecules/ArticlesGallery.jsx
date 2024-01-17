
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleComponent from '../atoms/ArticleComponent';

const ArticlesGallery = () => {
    return (
        <>
           <Container>  
                <Row className="d-flex flex-sm-column flex-md-row align-items-center">
                    <Col>
                    <ArticleComponent
                    number={"01"} 
                    src={"./src/assets/imgs/image01.jpeg"} 
                    alt={"icona"}
                    name={"Tom Cooper"} 
                    date={"Oct 20"} 
                    duration={"7 min read"}
                    title={"Ukraine War, 23 October 2022"}
                    />
                    </Col>
                    <Col>
                    <ArticleComponent 
                    number={"02"} 
                    src={"./src/assets/imgs/image02.png"} 
                    alt={"icona"}
                    name={"Arthur Hayes"} 
                    date={"Oct 27"} 
                    duration={"5 min read"} 
                    title={"Entrepreneur's Handbook"}/>
                    </Col>
                    <Col>
                    <ArticleComponent 
                    number={"03"} 
                    src={"./src/assets/imgs/image03.jpeg"} 
                    alt={"icona"}
                    name={"Tom Cooper"} 
                    date={"Oct 24"} 
                    duration={"6 min read"} 
                    title={"How I Learned to Love My Breasts Even Though One is a Horcrux For Voldemort"}/>
                    </Col>
                </Row>
                <Row className="d-flex flex-sm-column flex-md-row align-items-center">
                    <Col>
                    <ArticleComponent
                    number={"04"} 
                    src={"./src/assets/imgs/image04.png"} 
                    alt={"icona"}
                    name={"Frank Mastropolo"} 
                    date={"Oct 22"} 
                    duration={"3 min read"} 
                    title={"The Night Paul McCartney Donned a Disguise at Fillmore East"}/>
                    </Col>
                    <Col>
                    <ArticleComponent 
                    number={"05"} 
                    src={"./src/assets/imgs/image05.jpeg"} 
                    alt={"icona"}
                    name={"Tom Cooper"} 
                    date={"Oct 24"} 
                    duration={"6 min read"} 
                    title={"How I Learned to Love My Breasts Even Though One is a Horcrux For Voldemort"}
                    star={true}
                    />
                    </Col>
                    <Col>
                    <ArticleComponent 
                    number={"06"} 
                    src={"./src/assets/imgs/image06.png"} 
                    alt={"icona"}
                    name={"Wesley Smits"} 
                    date={"Oct 20"} 
                    duration={"7 min read"} 
                    title={"How To Make Visual Studio Code Look Amazing"}
                    star={true}
                    />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ArticlesGallery;