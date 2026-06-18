import styles from './Destaque.module.css';

import { dayHighlights } from '../utils/highlights';

function Destaque() {
    const appMostUsed = dayHighlights();

    const destaques = [
        {
            titulo: "App mais usado",
            nome: appMostUsed.name,
            time: "(h min)",
        },
        {
            titulo: "Dia com maior uso",
            nome: "data",
            time: "(h min)",
        },
        {
            titulo: "Categoria favorita",
            nome: "categoria",
            time: "(h min)",         
        }
    ]
    return (
        <div className={styles.card}>
            <h3>Destaques do período</h3>

            {destaques.map(item => (
                <div key={item.titulo} className={styles.destaque}>
                    <div className={styles.icone}>
                        icon
                    </div>

                    <div className={styles.info}>
                        <p className={styles.titulo}>{item.titulo}</p>
                        <p className={styles.appName}>{item.nome}</p>
                    </div>

                    <p className={styles.time}>{item.time}</p>
                </div>
            ))}
        </div>
    )
}

export default Destaque