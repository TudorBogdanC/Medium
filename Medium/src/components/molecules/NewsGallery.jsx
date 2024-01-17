import { Container } from "react-bootstrap";
import NewsComponent from "../atoms/NewsComponent"



const NewsGallery = () => {
    return (
        <>
            <Container className="d-flex flex-column">
                <NewsComponent
                avatar="./src/assets/imgs/image07.jpeg"
                alt="avatar"
                name="Robert Roy Britt"
                title="How Old is Old?"
                description="What we consider “old” changes dramatically with age, and our perspectives can be predictive of how well we age"
                date="Oct 27"
                duration="5 min read"
                textButton="true"
                text="Aging"
                star="true"
                image="./src/assets/imgs/image08.jpeg"
                /> 
                <NewsComponent
                avatar="./src/assets/imgs/image09.jpeg"
                alt="avatar"
                name="Taru Anniina Liikanen"
                title="Is Taylor Swift Allowed to Speak About Fat?"
                description="Can you speak about your trauman if you don't look traumatized?"
                date="Oct 27"
                duration="5 min read"
                textButton="true"
                text="Health"
                star="true"
                image="./src/assets/imgs/image10.jpeg"
                />
                <NewsComponent
                avatar="./src/assets/imgs/image11.jpeg"
                alt="avatar"
                name="David Rodenas, Ph. D."
                title="Don't Screw Up, You Will Be Found Guilty"
                description="Software Engineer, yours is the right to produce high-quality work at all times,..."
                date="Oct 15"
                duration="5 min read"
                textButton="true"
                text="Software Engineering"
                star="true"
                image="./src/assets/imgs/image12.png"
                />
                <NewsComponent
                avatar="./src/assets/imgs/image13.png"
                alt="avatar"
                name="Microsoft Design"
                title="Leave No Trace"
                description="How product designers can break from the status quo and help our planet"
                date="Oct 25"
                duration="11 min read"
                textButton="true"
                text="Sustainability"
                star="true"
                image="./src/assets/imgs/image14.png"
                /> 
                <NewsComponent
                avatar="./src/assets/imgs/image15.jpeg"
                alt="avatar"
                name="Scott H. Young"
                title="Variability, Not Repetition, is the Key to Mastery"
                description="Bruce Lee is reported to have said,“I fear not the man who has practiced 10.000...“"
                date="Oct 26"
                duration="7 min read"
                textButton="true"
                text="Health"
                star="true"
                image="./src/assets/imgs/image16.jpg"
                />
                <NewsComponent
                avatar="./src/assets/imgs/image17.png"
                alt="avatar"
                name="Paul A. DeStefano"
                title="What I Overheard as an Escape Room Actor"
                description="Lock a group of people in a room and you'll witness some surprising..."
                date="Jan 18, 2020"
                duration="6 min read"
                textButton="true"
                text="Experiences"
                star="true"
                image="./src/assets/imgs/image18.jpeg"
                /> 
                 <NewsComponent
                avatar="./src/assets/imgs/image19.jpeg"
                alt="avatar"
                name="Kim Scott"
                title="6 Steps for Setting Measurable Goals to Avoid “Productivity Paranoia“"
                description="With more people working in remote and hybrid environments than ever before,..."
                date="Jan 18, 2020"
                duration="6 min read"
                textButton="true"
                text="Health"
                star="true"
                image="./src/assets/imgs/image20.jpg"
                />                                                                                                 
            </Container>
        </>
    )
}

export default NewsGallery;