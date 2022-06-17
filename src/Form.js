import { useState } from "react";


// form that will take in users search term, also maybe a currency selector?
const Form = (props) => {

    // ! Removed searchValue state from Form and moved to App, so that it can pass the value down to CoinList for filtering.
    // const [searchValue, setSearchValue]  = useState('');
    // const [selectValue, setSelectValue] = useState('cad');
    
    // ! Removed for same reason as above, don't delete yet
    // const handleInputChange = (e) => {
    //     setSearchValue(e.target.value)
    // }

    // const handleSelectChange = (e) => {
    //     setSelectValue(e.target.value)
    // }


    // I'll need an onSubmit that will send whatever the user typed plus the currency value up to App to set those values 
        // UPDATE: don't neccesarily need a submit, currently it works just when the user changes any of the inputs

    return (
        <form action="">
            <input 
                onChange={(e)=> { 
                    props.searchChange(e.target.value)
                }} 
                value={props.inputVal} 
                type="text"
            />
            <select 
                onChange={(e)=> {
                    props.currChange(e.target.value);
                }} 
                value={props.currVal} 
                name="currency" 
                id="currency"
            >
                <option value="cad">CAD</option>
                <option value="usd">USD</option>
            </select>

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
        </form>

    );
}

export default Form;