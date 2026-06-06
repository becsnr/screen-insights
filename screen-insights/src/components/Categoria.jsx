import styles from './Categoria.module.css';

function Categoria() {
    return (
        <div className={styles.card}>
            <h3>Uso por categoria</h3>

            <div className={styles.container}>
                <div className={styles.grafico}>
                    grafico pizza
                </div>

                <div className={styles.categorias}>
                    <p>categoria %</p>
                    <p>categoria %</p>
                    <p>categoria %</p>
                    <p>categoria %</p>
                    <p>categoria %</p>
                </div>
            </div>
        </div>
    )
}

export default Categoria