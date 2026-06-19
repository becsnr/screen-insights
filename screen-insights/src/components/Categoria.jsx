import styles from './Categoria.module.css';

import { getCategory } from '../utils/getCategory';
import { formatMinutes } from '../utils/formatMinutes';

function Categoria({ data }) {
    const categorias = getCategory(data);

    return (
        <div className={styles.card}>
            <h3>Uso por categoria</h3>

            <div className={styles.container}>
                <div className={styles.grafico}>
                    grafico pizza
                </div>

                <div className={styles.categorias}>
                    {categorias.map(item => (
                        <div key={item.category} className={styles.item}>
                            <p className={styles.category}>{item.category}</p>

                            <p className={styles.percentage}>{item.percentage}%</p>

                            <p className={styles.time}>{formatMinutes(item.minutes)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categoria