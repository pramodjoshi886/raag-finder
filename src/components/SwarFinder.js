import React, { useState } from 'react';
import '../components/SwarFinder.css'
import raagas from '../components/Raagas'

  
  function SwarFinder() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(null);
  
    const findRaag = () => {
      const raag = raagas.find(raag => raag.name.toLowerCase() === inputValue.toLowerCase());
      if (raag) {
        setResult(<div>
            <h3>Aaroha:</h3>
            <h1>{raag.aaroha}</h1>
            <h3>Avaroh:</h3>
            <h1>{raag.avaroh}</h1>
        </div>);
    } else {
        setResult(
          <h1>Raaga not found!</h1>
          );
    }
    };
  
    return (
      <div className="raag-name-finder-container"> 
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Enter Raaga Name"
        />
        <button onClick={findRaag}>Search</button>
        <div className="result"> 
          {result}
        </div>
      </div>
    );
  }

export default SwarFinder;
