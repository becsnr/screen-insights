import styles from './TempoTotal.module.css';

import { getTotalTime } from '../utils/getTotalTime';
import { getDaysTotalData } from '../utils/getWeekTotalTime';
import { getMostUsedDay } from '../utils/mostUsed';
import { formatMinutes } from '../utils/formatMinutes';

function TempoTotal({ data }) {
    if (!data) return null;

    const totalTime = Array.isArray(data) ? getDaysTotalData(data) : getTotalTime(data.apps);

    const top3 = getMostUsedDay(data.date);
    
    // console.log(top3);

    // console.log(`Total de tempo: ${totalTime}`)

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div>
                    <h1>Tempo de tela</h1>
                    <h2>{formatMinutes(totalTime)}</h2>
                </div>

                <div className={styles.grafico}>grafico pizza</div>
            </div>
            
            {top3.map(app => (
                <p key={app.name}>{app.name} ---- {formatMinutes(app.minutes)}</p>
            ))}
        </div>
    )
}

export default TempoTotal