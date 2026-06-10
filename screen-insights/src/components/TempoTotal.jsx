import styles from './TempoTotal.module.css';

import { getTotalTime } from '../utils/getTotalTime';
import { formatMinutes } from '../utils/formatMinutes';

function TempoTotal({ data }) {
    if (!data) return null;

    const totalTime = getTotalTime(data.apps);
    const format = formatMinutes(totalTime);

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div>
                    <h1>Tempo de tela</h1>
                    <h2>{format}</h2>
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