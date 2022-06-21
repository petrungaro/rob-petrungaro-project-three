// structure of individual coin items that will appear in the list
const Coin = (props) => {

    const handleClick = (e) => {
        const siblingEl = e.target.nextSibling;
        console.log(siblingEl);
        siblingEl.classList.toggle('show');
    }

    // ***** Conditional colour styling for price changes ****** //
    const change24hStyle = props.change24h > 0 ? {color: 'green'} : {color: 'red'};
    const change7dStyle = props.change7d > 0 ? {color: 'green'} : {color: 'red'};
    const change30dStyle = props.change30d > 0 ? {color: 'green'} : {color: 'red'};
    const athStyle = props.ath > 0 ? {color: 'green'} : {color: 'red'};
    const atlStyle = props.atl > 0 ? {color: 'green'} : {color: 'red'};

    
    

    return (
        // TODO: consider adding a 'more' section that opens up on click, css-grid or flexbox?
        <li className="coin">
            <div className="img-container">
                <img src={props.image} alt="" />
            </div>
            <p className="coin-symbol">{props.symbol.toUpperCase()}</p>
            <p className="coin-name">{props.name}</p>
            <p className="coin-price">${props.price}</p>
            <p className="coin-24h-change" style={change24hStyle}>{props.change24h}%</p>
            
            <button onClick={handleClick} className="show-more">+</button>

            
            <div className="extra-info">
                <div className="price-change">
                    <div className="details-row">
                        <h3>24h Change: </h3>
                        <p style={change24hStyle}>{props.change24h}%</p>
                    </div>
                    <div className="details-row">
                        <h3>7-day Change: </h3>
                        <p style={change7dStyle}>{props.change7d}%</p>
                    </div>
                    <div className="details-row">
                        <h3>30-day Change: </h3>
                        <p style={change30dStyle}>{props.change30d}%</p>
                    </div>
                </div>

                <div className="coin-details">
                    <div className="details-row">
                        <h3>Market Cap:</h3>
                        <div className="stacked-detail">
                            <p>${props.marketCap}</p>
                            <p className="date">Rank #{props.marketRank}</p>
                        </div>
                    </div>
                    <div className="details-row">
                        <h3>All-Time-High</h3>
                        <div className="stacked-detail">
                            <p>${props.ath} (<span style={athStyle}>{props.athPercent}%</span>)</p>
                            <p className="date">{props.athDate}</p>
                        </div>
                    </div>
                    <div className="details-row">
                        <h3>All-Time-Low</h3>
                        <div className="stacked-detail">
                            <p>${props.atl} (<span style={atlStyle}>{props.atlPercent}%</span>)</p>
                            <p className="date">{props.atlDate}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </li>
    );

}

export default Coin;