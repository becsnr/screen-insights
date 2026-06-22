import styles from './Destaque.module.css';

import { FaRegStar, FaChartSimple, FaRegCalendarDays, FaRegHeart } from "react-icons/fa6";

import { appHighlights, dayHighlights, favCategory } from '../utils/highlights';
import { formatMinutes } from '../utils/formatMinutes';
import { getTotalTime } from '../utils/getTotalTime';

function Destaque() {
    const appMostUsed = appHighlights();
    const dayMostUsed = dayHighlights();
    const categoryFav = favCategory();

    const destaques = [
        {
            titulo: "App mais usado",
            nome: appMostUsed.name,
            time: formatMinutes(appMostUsed.minutes),
            icone: FaChartSimple,
        },
        {
            titulo: "Dia com maior uso",
            nome: dayMostUsed.date,
            time: formatMinutes(getTotalTime(dayMostUsed.apps)),
            icone: FaRegCalendarDays,
        },
        {
            titulo: "Categoria favorita",
            nome: categoryFav.category,
            time: formatMinutes(categoryFav.minutes),
            icone: FaRegHeart,       
        }
    ]
    
    return (
        <div className={styles.card}>
            <div className={styles.tituloCard}>
                <div className={styles.icone}><FaRegStar /></div>
                <h2>Destaques do período</h2>
            </div>

            {destaques.map(item => {
                const Icone = item.icone;

                return (
                    <div key={item.titulo} className={styles.destaque}>
                        <div className={styles.icone}>
                            <Icone />
                        </div>

                        <div className={styles.info}>
                            <p className={styles.titulo}>{item.titulo}</p>
                            <p className={styles.appName}>{item.nome}</p>
                        </div>

                        <p className={styles.time}>{item.time}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Destaque