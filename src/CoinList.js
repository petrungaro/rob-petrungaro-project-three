import Coin from "./Coin";

// list that will hold the individual coin items
//  ? I should import Coin into this component? 
    //  So CoinList will receive the response.data array as props from App, and then I will run a .map on the array, and put the props inside a <Coin price=array.price image='link' ..etc?  />
        // and then the Coin component is what actually places those props in position, assigns classes to divs, etc??


        const CoinList = (props) => {

            let coinData = props.coinArray;
            console.log(coinData);

            // console.log(props.coinArray[0].current_price.toLocaleString());
        
            return (
                <ul className="coin-list">
                    {coinData.map((coin) => {
                        return (
                            <Coin 
                                key={coin.symbol}
                                name={coin.name}
                                symbol={coin.symbol}
                                image={coin.image}
                                price={coin.current_price.toLocaleString()}
                                change24h={coin.price_change_percentage_24h.toFixed(2)}
                                change7d={coin.price_change_percentage_7d_in_currency.toFixed(2)}

                            />
                        )
                    })}
                </ul>
            );
        }
        
        export default CoinList;