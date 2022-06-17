// structure of individual coin items that will appear in the list
const Coin = (props) => {

    const handleClick = (e) => {
        const siblingEl = e.target.nextSibling;
        console.log(siblingEl);
        siblingEl.classList.toggle('show');
    }

    return (
        // TODO: consider adding a 'more' section that opens up on click, css-grid or flexbox?
        <li className="coin">
            <div className="img-container">
                <img src={props.image} alt="" />
            </div>
            <p className="coin-symbol">{props.symbol.toUpperCase()}</p>
            <p className="coin-name">{props.name}</p>
            <p className="coin-price">${props.price}</p>
            <p className="coin-24h-change">{props.change24h}%</p>
            
            <button onClick={handleClick} className="show-more">+</button>

            
            <div className="extra-info">
                Extra details will go in here
                <p className="coin-name">{props.name}</p>
                <p className="coin-7d-change">{props.change7d}%</p>
                <p>hello</p>
            </div>
        </li>
    );

}

export default Coin;