import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

/* COMPONENT IMPORTS */
import Form from './Form';
import CoinList from './CoinList';



function App() {

  /* STATE VARIABLES */
  // Likely state variables:
    // data response from api call
    // user input in the text field
    // user selection for the currency 
const [ coinData, setCoinData ] = useState([]);


  /* API CALL FOR LIST ON LOAD */

// endpoints and description:
  // * /coins/markets  (Use this to obtain all the coins market data (price, market cap, volume, vs currency)
  // * /simple/price  (Get the current price of any cryptocurrencies in any other supported currencies that you need)
  // * /simple/supported_vs_currencies  (get a list of supported vs currencies) 
    // per Jennifer's suggestion, I will use hardcoded values for the select options (cad, usd, btc?), and I can make it a stretch goal to make an api call to retrieve the full list of vs currencies if I have time.
  

  useEffect(() => {

    axios({
      url: 'https://api.coingecko.com/api/v3/coins/markets',
      method: 'get',
      params: {
        vs_currency: 'cad', // ! this will be a variable later on
        order: 'market_cap_desc',
        per_page: 50,
        price_change_percentage: '24h,7d',
      }
    })
    .then((response) => {

      // some error handling? if statusText='OK'?... else?

      // setFunction(response.data (array of 100 objects))
      setCoinData(response.data);
    })

  }, [])




  return (
    <div className="App">
      <h1>testing testing 123</h1>

      {/* The CoinList function was running faster than the api call was returned */}
      {/* QUESTION FOR INSTRUCTORS - how do I make sure the component doesn't load until the API call is complete and successful? could I use useEffect inside a component that depends on a state change in it's parent? */}
      { coinData.length > 0 ?
      <CoinList 
        coinArray={coinData}  
      />
      : <p>no coins</p>}
    </div>
  );
}

export default App;
