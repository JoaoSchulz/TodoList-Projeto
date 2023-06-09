import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.svg';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to={'/'}>
                <img className={styles.img} src={logo} alt="Logo principal do sistema" />
            </Link>
        </header>
    )
}