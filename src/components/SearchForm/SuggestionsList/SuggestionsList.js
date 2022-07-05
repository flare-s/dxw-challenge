import styles from "./SuggestionsList.module.css";
import { useState, useEffect } from "react";
const SuggestionsList = (props) => { 
    const {value, setValue, data, submit} = props;
    const [triggered, setTriggered] = useState(false);
    
    //Start the search when one of the suggestions is clicked
    useEffect(() => {
        triggered && submit.current.click();
        setTriggered(false);
    }, [triggered]);

    const handleClick = (val) => {
        setValue(val);
        setTriggered(true);
    }
    return (
        <ul className={styles["suggestions-list"]}>
            {data
            //get an array with suggestions that start with the value intered in the search input
            .filter(el => { 
                let key = Object.keys(el)[0].toLowerCase();
                return value.trim() && key.startsWith(value.toLowerCase()) && key !== value.toLowerCase()
            })
            // Limit the sugestion to 5
            .slice(0, 5)
            // Create a list item for each of them
            .map((el, i) => <li key={i} onClick={(e) => handleClick(e.target.textContent)} className={styles.suggestion}>{Object.keys(el)[0]}</li>)}
        </ul>
    )
}

export default SuggestionsList;