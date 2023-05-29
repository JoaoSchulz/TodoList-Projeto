import { Link, useRouteError } from "react-router-dom";
import styles from './styles.module.css';

type ErrorResponse = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    status: number;
    statusText: string;
    message?: string;
};

export default function NotFound() {
    const error = useRouteError() as ErrorResponse;
    console.error(error);

    return (
        <section className={styles.error_page}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p><i>{error.statusText || error.message}</i></p>
            <Link to="/">
                <button className={styles.button}>Voltar</button>
            </Link>
        </section>
    );
}