import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import '../components/SwarFinder.css';
import raagas from '../components/Raagas';

const SwarFinder = () => {
  const [inputValue, setValue] = useState('');
  const [result, setResult] = useState(null);

  const findRaag = () => {
    if (inputValue) {
      setResult(<div>
        <h3>Aaroha:</h3>
        <h1>{inputValue.aaroha}</h1>
        <h3>Avaroh:</h3>
        <h1>{inputValue.avaroh}</h1>
      </div>);
    } else {
      setResult(
        <h1>Raaga not found!</h1>
      );
    }
  };
  return (
    <div>
      <Autocomplete
        disablePortal
        options={raagas}
        id='find-raag-autocomplete'
        value={inputValue}
        onChange={(event, newValue) => {
          setValue(newValue);
          // console.log(newValue);
        }}
        fullWidth
        // getOptionLabel={(option) => option.name}

        renderInput={(params) => <TextField {...params} label="Raagas" />}
      />
      <Button onClick={findRaag}>Search</Button>
      <div className="result">
        {result}
      </div>
    </div>

  );
}
export default SwarFinder;
