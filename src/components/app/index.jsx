import { Header } from "../header";
import { Logo } from '../logo'
import { Search } from '../search'
import { Footer } from "../footer";
import { Sort } from "../sort";
import { CardList } from "../card-list";
import { dataCard } from "../../data";
import { useEffect, useState } from "react";
import './style.css';




export function App() {
  const [cards, setCards] = useState(dataCard);
  const [searchQuery, setsearchQuery] = useState("");

 

  function handleRequest() {
    const filterCards = dataCard.filter(
      (item) => item.name.includes(searchQuery)
      );
      setCards(filterCards);
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    handleRequest()
  }

  function handleInputChange(dataInput) {
    setsearchQuery(dataInput);
  }

  useEffect(() => {
    handleRequest();
  }, []); // если убрать searchQuery, то будет срабатывать после нажатия Enter
  


  return (
    <>
     <Header>
        <Logo/>
        <Search 
        handleFormSubmit = {handleFormSubmit} 
        handleInputChange ={handleInputChange}
        />
      </Header>
     <main className='content container'>
      <Sort/>
      <CardList goods={cards} />
      </main> 
      <Footer/>  
    </>
  );
}

