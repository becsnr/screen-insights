import styles from './TempoTotal.module.css'

function TempoTotal() {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div>
                    <h1>Tempo de tela</h1>
                    <h2>h min</h2>
                </div>

                <div className={styles.grafico}>grafico pizza</div>
            </div>

            <p>app + tempo</p>
            <p>app + tempo</p>
            <p>app + tempo</p>
        </div>
    )
}

export default TempoTotal