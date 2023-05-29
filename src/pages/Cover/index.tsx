import styles from './styles.module.css'
import capa from '../../assets/capa.svg'
import { Link } from 'react-router-dom'

export const Cover = () => {
    return (
        <section className={styles.container}>
            <article className={styles.text}>
                <h1>ToDo List</h1>
                <p>a</p>
            </article>
            <article >
                <Link className={styles.conteiner_Image} to={'/To-Do'}>
                    <img className={styles.image} src={capa} alt="" />
                </Link>
            </article>
        </section>
    )
}