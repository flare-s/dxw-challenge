import styles from "./SuggestionsList.module.css";
const SuggestionsList = (props) => { 
    const {value, setValue, data} = props;

    const handleClick = (val) => {
        setValue(val);
    }
    return (
        <ul className={styles["suggestions-list"]}>
            {data
            .filter(el => { 
                let key = Object.keys(el)[0].toLowerCase();
                return value.trim() && key.startsWith(value.toLowerCase()) && key !== value.toLowerCase()
            })
            .slice(0, 5)
            .map((el, i) => <li key={i} onClick={(e) => handleClick(e.target.textContent)} className={styles.suggestion}>{Object.keys(el)[0]}</li>)}
        </ul>
    )
}

export default SuggestionsList;