import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

/* COMPONENT IMPORTS */
import Form from './Form';
import CoinList from './CoinList';
import News from './News';
import Footer from './Footer';



function App() {

  /* STATE VARIABLES */
const [ coinData, setCoinData ] = useState([]);
const [searchValue, setSearchValue]  = useState('');
const [currencyValue, setCurrencyValue] = useState('cad');
const [qtyShowValue, setQtyShowValue] = useState(25);


/*  Functions passed to Form to set State in App */
const inputChange = ( newValue ) => {
  setSearchValue(newValue);
}
const currencyChange = (newValue) => {
  setCurrencyValue(newValue);
}
const quantityChange = (newValue) => {
  setQtyShowValue(newValue);
}


  /* API CALL FOR LIST ON LOAD */
  useEffect(() => {

    axios({
      url: 'https://api.coingecko.com/api/v3/coins/markets',
      method: 'get',
      params: {
        vs_currency: currencyValue, 
        order: 'market_cap_desc',
        per_page: 200,
        price_change_percentage: '24h,7d,30d',
      }
    })
    .then((response) => {
      // some error handling? if statusText='OK'?... else?
      setCoinData(response.data);
    })

  }, [currencyValue])


  return (
    <div className="App">

      <header>
        <h1>COIN<span>watch</span></h1>
        <Form 
          searchChange={inputChange} 
          inputVal={searchValue}
          currChange={currencyChange}
          currVal={currencyValue}
          qtyChange={quantityChange}
          qtyVal={qtyShowValue}
      /></header>

      <div className="flex-container">
        { coinData.length > 0
          ? <CoinList
              coinArray={coinData}
              searchTerm={searchValue}
              qtyToShow={qtyShowValue}
            />
          : <p>Something went wrong, please try again</p>
        }
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default App;
