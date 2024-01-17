
import ButtonCategories from "../atoms/ButtonCategories"
import CustomFooter from "../atoms/CustomFooter";


const SideComponent = () => {
    return (
        <>
           <h6 className="mb-3 mx-2">Discover more of what matters to you</h6>
           <div className="d-flex flex-wrap">
            <ButtonCategories text={"Technology"}/>
            <ButtonCategories text={"Visual Studio Code"}/>
            <ButtonCategories text={"Harry Potter"}/>
            <ButtonCategories text={"Aging"}/>
            <ButtonCategories text={"Coding"}/>
            <ButtonCategories text={"Girl power"}/>
            <ButtonCategories text={"Javascript"}/>
            <ButtonCategories text={"Machine Learning"}/>
            <ButtonCategories text={"Data Science"}/>
            <ButtonCategories text={"Politics"}/> 
           </div> 
           <hr/>
           <CustomFooter/>
        </>
    )
}

export default SideComponent;