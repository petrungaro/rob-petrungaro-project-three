import { useState } from "react";


// form that will take in users search term, also maybe a currency selector?
const Form = (props) => {

    // ! Removed searchValue state from Form and moved to App, so that it can pass the value down to CoinList for filtering.
    // const [searchValue, setSearchValue]  = useState('');
    const [selectValue, setSelectValue] = useState('cad');
    
    // ! Removed for same reason as above, don't delete yet
    // const handleInputChange = (e) => {
    //     setSearchValue(e.target.value)
    // }

    const handleSelectChange = (e) => {
        setSelectValue(e.target.value)
    }


    // I'll need an onSubmit that will send whatever the user typed plus the currency value up to App to set those values 

    return (
        <form action="">
            <input onChange={(e)=> {
                props.changeFunc(e.target.value)
            }} value={props.searchValue} type="text"/>
            <select onChange={handleSelectChange} value={selectValue} name="currency" id="currency">
                <option value="cad">CAD</option>
                <option value="usd">USD</option>
            </select>
        </form>

    );
}

export default Form;