import { useState } from "react";
import styles from "./SearchForm.module.css";
import SuggestionsList from "./SuggestionsList/SuggestionsList";
const SearchForm = () => {
    return (
        <form className={styles["search-form"]}>
            <input type="text" name="search" className={styles["search-input"]} placeholder="Enter acronym"/>
            <button className={styles["search-button"]}>Search</button>
            <SuggestionsList/>
        </form>
    )
}

export default SearchForm;