import Container from "../UI/Container";
import styles from "./ResultsSection.module.css";
const ResultsSection = ({result}) => {
    return(
        <section hidden={/* If the result is undefined hide this secton */ result === undefined ? true : false}>
            <Container>
                {/* Depending on the result state show the appropriate message */}
                <p className={styles.result}>{result === "empty" ?
                 "Please enter an acronym to start the search." :
                  typeof result === "object" && result !== null ?
                  `The acronym ${Object.keys(result)[0]} stands for "${result[Object.keys(result)[0]]}".`
                  : "We couldn't find what you're looking for."
                }</p>
            </Container>
        </section>
    )
}

export default ResultsSection;