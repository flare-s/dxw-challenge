import { useState, useRef } from "react";
import styles from "./SearchForm.module.css";
import SuggestionsList from "./SuggestionsList/SuggestionsList";
import data from "../../data";
const SearchForm = ({setResult}) => {
    const [value, setValue] = useState("");
    const submit = useRef(null);
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // clear the input
        setValue("");
        // Change the reslut state to show the results section with the result or with an appropriate error message.
        if (value.trim() === "") {
            return setResult("empty")
        }
        // Look if the value entered is available at the "database"
        let resultArr = data.filter(el => {
            let key = Object.keys(el)[0].toLowerCase();
            return key === value.toLowerCase();
        })
        return resultArr.length ? setResult(resultArr[0]) : setResult("not found");
    }
    return (
        <form className={styles["search-form"]} onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="search" className={styles["search-input"]} value={value} onChange={(e) => handleChange(e)} placeholder="Enter acronym"/>
            <button ref={submit} type="submit" className={styles["search-button"]}>Search</button>
            <SuggestionsList value={value} submit={submit} setValue={setValue} data={data}/>
        </form>
    )
}

export default SearchForm;