import ButtonCategories from "./ButtonCategories";
import StarIcon from "./StarIcon"


const NewsComponent = (props) => {
    return (
        <>
           <div className="news1">
             <div className="textNews container-fluid">
                <small><img className="author" src={props.avatar} alt={props.alt}/>
                <b>{props.name}</b></small>
                <h6><span className="titleArticle">{props.title}</span><br/><small className="textArticle">{props.description}</small></h6>
                <p className="d-flex align-items-center">
                    <time>{props.date}</time> · {props.duration} · <span> {props.textButton && <ButtonCategories text={props.text}/>}</span> <span>{props.star && <StarIcon/>}</span>
                </p>
             </div>
                <img className="immagine1" height={120} src={props.image}/>
           </div>
        </>

    )
}

export default NewsComponent;