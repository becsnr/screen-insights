import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <h1 className={styles.titulo}>Screen Insights</h1>
            <h2 className={styles.subtitulo}>Resumo geral do seu tempo de tela</h2>
        </header>
    )
}

export default Header