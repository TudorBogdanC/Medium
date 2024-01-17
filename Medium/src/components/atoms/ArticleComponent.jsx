import StarIcon from "./StarIcon";


const ArticleComponent = (props) => {
    return (
        <div>
            <div className="articolo">
                <div className="numero">
                    <span>{props.number}</span>
                </div>
                <div className="testo">
                    <small>
                        <img src={props.src} alt={props.alt} />
                        <b>{props.name}</b>
                    </small>
                    <h6>{props.title}</h6>
                    <p>
                        <time>{props.date}</time> · {props.duration} {props.star && <StarIcon/>}
                    </p>  
                </div>
            </div>
        </div>
    );
};

export default ArticleComponent;