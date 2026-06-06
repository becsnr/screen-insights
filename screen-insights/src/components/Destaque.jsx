import styles from './Destaque.module.css';

function Destaque() {
    return (
        <div className={styles.card}>
            <h3>Destaques do período</h3>

            <div className={styles.destaque}>
                <div className={styles.icone}>
                    icon
                </div>
                
                <div className={styles.info}>
                    <p className={styles.titulo}>App mais usado</p>
                    <p className={styles.res}>( h min)</p>
                </div>
            </div>

            <div className={styles.destaque}>
                <div className={styles.icone}>
                    icon
                </div>

                <div className={styles.info}>
                    <p className={styles.titulo}>Dia com maior uso</p>
                    <p className={styles.res}>( h min)</p>
                </div>
            </div>

            <div className={styles.destaque}>
                <div className={styles.icone}>
                    icon
                </div>

                <div className={styles.info}>
                    <p className={styles.titulo}>Categoria favorita</p>
                    <p className={styles.res}>( h min)</p>
                </div>
            </div>
        </div>
    )
}

export default Destaque