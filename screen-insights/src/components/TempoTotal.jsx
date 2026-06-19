import styles from './TempoTotal.module.css';

import { FaRegClock } from 'react-icons/fa6';

import { getTotalTime } from '../utils/getTotalTime';
import { getDaysTotalData } from '../utils/getWeekTotalTime';
import { getMostUsed } from '../utils/mostUsed';
import { formatMinutes } from '../utils/formatMinutes';

import Grafico from './Grafico'

function TempoTotal({ data }) {
    if (!data) return null;

    const totalTime = Array.isArray(data) ? getDaysTotalData(data) : getTotalTime(data.apps);

    const top3 = getMostUsed(data);

    const COLORS = [
        "#7E3AF2",
        "#6ED4D4",
        "#60A5FA",
    ];
    
    // console.log(top3);

    // console.log(`Total de tempo: ${totalTime}`)

    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <div className={styles.top}>
                    <div className={styles.icone}>
                        <FaRegClock />
                    </div>
                    <div>
                        <h1>Tempo de tela</h1>
                    </div>
                </div>

                <h2 className={styles.time}>{formatMinutes(totalTime)}</h2>
                
                <div>
                    {top3.map((app, index) => (
                        <div key={app.name} className={styles.item}>
                            <span 
                                className={styles.bolinha}
                                style={{backgroundColor: COLORS[index]}} 
                            />
                            
                            <p >{app.name} ---- {formatMinutes(app.minutes)}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.grafico}>
                <Grafico data={top3}/>
            </div>
        </div>
    )
}

export default TempoTotal