import React, { useState } from "react";
import Card from "./components/card";

function App() {
  const [flipped, setFlipped] = useState([]);
  const handleClick = (id) => setFlipped([flipped, id]);

  return (
    <div>
      <h2>Can you remember where the cards are?
      </h2>
      <Card 
      id={1}
      width={100}
      height={100}
      back={'../public/images/Screen Shot 2019-06-23 at 4.03.11 PM.png'}
      front={'../public/images/Screen Shot 2019-06-23 at 4.03.16 PM.png'}
      flipped={flipped.includes(1)}
      handleClick={() => handleClick(1)}
      />
    </div>
  )
}

export default App;
