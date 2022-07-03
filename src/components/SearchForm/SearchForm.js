import { useState } from "react";
import styles from "./SearchForm.module.css";
import SuggestionsList from "./SuggestionsList/SuggestionsList";
import data from "../../data";
const SearchForm = ({setResult}) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            return setResult("empty")
        }
        let resultArr = data.filter(el => {
            let key = Object.keys(el)[0].toLowerCase();
            return key === value.toLowerCase();
        })
        return resultArr.length ? setResult(resultArr[0]) : setResult("not found");
    }
    return (
        <form className={styles["search-form"]} onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="search" className={styles["search-input"]} value={value} onChange={(e) => handleChange(e)} placeholder="Enter acronym"/>
            <button type="submit" className={styles["search-button"]}>Search</button>
            <SuggestionsList value={value} setValue={setValue} data={data}/>
        </form>
    )
}

export default SearchForm;