import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from './components/Card';
import CardsData from  './data.js';



function App() {

  let listOfCards = CardsData.map( (data) => {
    return <Card 
                  key={data.id}
                  data={data}
            />
  })

  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards-list"> 
        {listOfCards}
      </div>
    </>
    
  );
}

export default App;
