import axios from 'axios';
import {useState, useEffect} from 'react';


const Form = (props) => {

    const [vsCurrencyList, setVsCurrencyList] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies',
            method: 'get',
        })
        .then((response) => {
                    setVsCurrencyList(response.data);
        })
    
    }, [])


    return (
        <form action="">
            <div className="input-box">
                
                <input
                    onChange={(e)=> {
                        props.searchChange(e.target.value)
                    }}
                    value={props.inputVal}
                    type="text"
                    placeholder='Search by name'
                    id='searchBox'
                />
                <label htmlFor="searchBox">Search</label>
            </div>
            <div className="select-box">
                
                <select
                    onChange={(e)=> {
                        props.currChange(e.target.value);
                    }}
                    value={props.currVal}
                    name="currency"
                    id="currency"
                >
                    {/* Default base currency values - I want these at the top */}
                    <option value="cad">CAD</option>
                    <option value="usd">USD</option>
                    {/* Mapping through the currency array to provide other base currencies */}
                    {
                        vsCurrencyList.map((item)=> {
                            return (
                                <option key={item} value={item}>{item.toUpperCase()}</option>
                            )
                        })
                    }
                </select>
                <label htmlFor="curreny">Base</label>
            </div>
            
            <div className="select-box">
                
                <select
                    onChange={(e)=> {
                        props.qtyChange(e.target.value)
                    }}
                    value={props.qtyVal}
                    name="qty"
                    id="qty"
                >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                </select>
                <label htmlFor="qty">Show</label>
            </div>
        </form>

    );
}

export default Form;