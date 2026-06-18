import styles from './TempoTotal.module.css';

import { FaRegClock } from 'react-icons/fa6';

import { getTotalTime } from '../utils/getTotalTime';
import { getDaysTotalData } from '../utils/getWeekTotalTime';
import { getMostUsed } from '../utils/mostUsed';
import { formatMinutes } from '../utils/formatMinutes';

function TempoTotal({ data }) {
    if (!data) return null;

    const totalTime = Array.isArray(data) ? getDaysTotalData(data) : getTotalTime(data.apps);

    const top3 = getMostUsed(data);
    
    // console.log(top3);

    // console.log(`Total de tempo: ${totalTime}`)

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.icone}>
                    <FaRegClock />
                </div>

                <div>
                    <h1>Tempo de tela</h1>
                    {/* <h2>{formatMinutes(totalTime)}</h2> */}
                </div>

                <div className={styles.grafico}>grafico pizza</div>
            </div>

            <h2 className={styles.time}>{formatMinutes(totalTime)}</h2>
            
            {top3.map(app => (
                <p key={app.name}>{app.name} ---- {formatMinutes(app.minutes)}</p>
            ))}
        </div>
    )
}

export default TempoTotal