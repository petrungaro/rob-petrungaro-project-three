import Coin from "./Coin";

// list that will hold the individual coin items
//  ? I should import Coin into this component? 
    //  So CoinList will receive the response.data array as props from App, and then I will run a .map on the array, and put the props inside a <Coin price=array.price image='link' ..etc?  />
        // and then the Coin component is what actually places those props in position, assigns classes to divs, etc??


const CoinList = (props) => {
    // make a copy of the array
    const coinData = [...props.coinArray];
    // filter through the array with user-provided search term
    // TODO - can I make this check against both the name and the symbol?
    const filteredCoins = coinData.filter((coin) => {
        return coin.name.toLowerCase().includes(props.searchTerm.toLowerCase())
    })

    return (

        // https://stackoverflow.com/questions/42374873/limit-items-in-a-map-loop
        // limiting how many items of the array to show
        <ul className="coin-list">
            {filteredCoins.slice(0,props.qtyToShow).map((coin) => {
                return (
                    // TODO: add a header row to show what the values below are - css grid??
                    <Coin 
                        key={coin.symbol ? coin.symbol : '--'}
                        name={coin.name ? coin.name : '--'}
                        symbol={coin.symbol ? coin.symbol : '--'}
                        image={coin.image ? coin.image : ''}
                        price={
                            coin.current_price 
                            ? coin.current_price.toLocaleString()
                            : '--'
                        }
                        change24h={
                            coin.price_change_percentage_24h
                            ? coin.price_change_percentage_24h.toFixed(2)
                            : '--'
                        }
                        change7d={
                            coin.price_change_percentage_7d_in_currency
                            ? coin.price_change_percentage_7d_in_currency.toFixed(2)
                            : '--'
                        }
                    />
                )
            })}
        </ul>
    );
}

export default CoinList;