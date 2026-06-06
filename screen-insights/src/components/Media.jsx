import styles from './Media.module.css';

function Media() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Desbloqueios</h2>
                <h3>Média diária: </h3>
            </div>

            <div className={styles.card}>
                <h2>Notificações</h2>
                <h3>Média diária: </h3>
            </div>
        </div>
    )
}

export default Media