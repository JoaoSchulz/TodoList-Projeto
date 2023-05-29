import styles from './styles.module.css'
import capa from '../../assets/capa.svg'

export const Cover = () => {
    return(
        <section className={styles.container}>
             <article className={styles.text}>
                <h1>ToDo List</h1>
             </article>
             <article>
                <img src={capa} alt="" />
             </article>
        </section>
    )
}