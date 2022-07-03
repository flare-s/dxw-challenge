import SearchForm from "../SearchForm/SearchForm";
import Container from "../UI/Container";
import styles from "./Header.module.css";
const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <SearchForm />
            </Container>
        </header>
    );
}

export default Header;