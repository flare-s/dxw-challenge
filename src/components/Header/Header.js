import SearchForm from "../SearchForm/SearchForm";
import Container from "../UI/Container";
import styles from "./Header.module.css";
const Header = (props) => {
    return (
        <header className={styles.header}>
            <Container>
                <SearchForm setResult={props.setResult} />
            </Container>
        </header>
    );
}

export default Header;