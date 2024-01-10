import { useState, useEffect } from "react";
import ButtonCategoryComponent from "./ButtonCategoryComponent";
import SingleCard from "./SingleCard";

const AllBooksComponent = () => {
  const [category, setCategory] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  
  const handleSearch = (e) => {
    let value = e.target.value;
    const actualState = category;
    const result = actualState.filter((book) => {
    return  book.title.toLowerCase().includes(value.toLowerCase());
    }) 
    setFilteredCategory(result);
  }
  useEffect(() => {
    setFilteredCategory(category);
  }, [category])
  
  return (
    <>
      <input type="text" onChange={handleSearch}/> 
      <ButtonCategoryComponent setCategory={setCategory} />
      <div className="d-flex flex-wrap">
        {filteredCategory.map((book, index) => {
          return <SingleCard book={book} key={index} />;
        })}
      </div>
    </>
  );
};

export default AllBooksComponent;
