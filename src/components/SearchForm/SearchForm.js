import { useState } from "react";
import styles from "./SearchForm.module.css";
import SuggestionsList from "./SuggestionsList/SuggestionsList";
const SearchForm = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <form className={styles["search-form"]}>
            <input type="text" name="search" className={styles["search-input"]} value={value} onChange={(e) => handleChange(e)} placeholder="Enter acronym"/>
            <button className={styles["search-button"]}>Search</button>
            <SuggestionsList value={value} setValue={setValue}/>
        </form>
    )
}

export default SearchForm;