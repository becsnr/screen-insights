import styles from './Categoria.module.css';

import { FaChartPie } from "react-icons/fa6";

import { getCategory } from '../utils/getCategory';
import { formatMinutes } from '../utils/formatMinutes';
import Grafico from './Grafico';

function Categoria({ data }) {
    const categorias = getCategory(data);

    const COLORS = [
        "#7E3AF2",
        "#6ED4D4",
        "#60A5FA",
        "#F59E0B",
        "#FB7185"
    ];

    return (
        <div className={styles.card}>
            <div className={styles.titulo}>
                <FaChartPie />
                <h3>Uso por categoria</h3>
            </div>

            <div className={styles.container}>
                <div className={styles.grafico}>
                    <Grafico data={categorias} />
                </div>

                <div className={styles.categorias}>
                    {categorias.map((item, index) => (
                        <div key={item.category} className={styles.item}>
                            <span className={styles.bolinha} style={{backgroundColor: COLORS[index]}}/>

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