import Coin from "./Coin";


const CoinList = (props) => {
    // make a copy of the array
    const coinData = [...props.coinArray];
    // filter through the array with user-provided search term
    // TODO - can I make this check against both the name and the symbol?
    const filteredCoins = coinData.filter((coin) => {
        return coin.name.toLowerCase().includes(props.searchTerm.toLowerCase())
    })

    return (

        <ul className="coin-list">

            <li className="coin header">
                <h2 className="coin-name-header">Coin</h2>
                <h2 className="coin-price">Price</h2>
                <h2 className="change">24h</h2>
            </li>

            {filteredCoins.slice(0,props.qtyToShow).map((coin) => {
                return (

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
                        change30d={
                            coin.price_change_percentage_30d_in_currency 
                            ? coin.price_change_percentage_30d_in_currency.toFixed(2)
                            : '--'
                        }
                        marketCap={
                            coin.market_cap
                            ? coin.market_cap.toLocaleString()
                            : '--'
                        }
                        marketRank={
                            coin.market_cap_rank
                            ? coin.market_cap_rank
                            : '--'
                        }
                        ath={
                            coin.ath
                            ? coin.ath.toLocaleString()
                            : '--'
                        }
                        athPercent={
                            coin.ath_change_percentage
                            ? coin.ath_change_percentage.toFixed(2)
                            : '--'
                        }
                        athDate={
                            coin.ath_date 
                            ? new Date(coin.ath_date).toLocaleDateString()
                            : '--'
                        }
                        atl={
                            coin.atl
                            ? coin.atl.toLocaleString()
                            : '--'
                        }
                        atlPercent={
                            coin.atl_change_percentage
                            ? coin.atl_change_percentage.toFixed(2)
                            : '--'
                        }
                        atlDate={
                            coin.atl_date
                            ? new Date(coin.atl_date).toLocaleDateString()
                            : '--'
                        }
                    />
                )
            })}
        </ul>
    );
}

export default CoinList;