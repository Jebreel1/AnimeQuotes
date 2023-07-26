import React, { useEffect, useState } from "react";
import Qouting from "./qoute";

function App() {

    const [animeQuote, setAnimeQuote] = useState({});
    
    const GetRandomQoute = async () => {
    
    const randomQoute = await fetch(`https://animechan.xyz/api/random`)
        .then(response => response.json());

        setAnimeQuote(randomQoute);
  }

  useEffect(() => {
    GetRandomQoute();
  }, []);

  console.log(animeQuote);

  return (
    <div className="App">
      <Qouting anime= {animeQuote}/>
    </div>
  );
}

export default App;
