import { Link } from "react-router";
import styles from "./Home.module.css";
import Button from "../../ui/Button";

const Home = () => {


    return (
    <main className={styles.home}>
        <h1>Welcome to My Cafe</h1>
        <Link to="/login">
            <Button type="button">Login</Button>
        </Link>
    </main>
    )
    
}

export default Home;