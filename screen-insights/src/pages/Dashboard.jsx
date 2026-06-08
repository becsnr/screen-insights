import styles from './Dashboard.module.css';

import Header from '../components/Header';
import TempoTotal from '../components/TempoTotal';
import Calendario from '../components/Calendario';
import Media from '../components/Media';
import Destaque from '../components/Destaque';
import Categoria from '../components/Categoria';

import { getScreenTimeData } from '../services/screenTimeData';
import { getTotalTime } from '../utils/getTotalTime';

function Dashboard() {
    const data = getScreenTimeData();

    const totalTime = getTotalTime(data[0].apps)

    console.log(`total: ${totalTime} \n data: `, data);

    return (
        <main className={styles.container}>
            <Header />

            <section className={styles.cards}>
                <TempoTotal />

                <div className={styles.grupo}>
                    <Media />
                    <Calendario />
                </div>
                
                <Destaque />
                <Categoria />
            </section>
        </main>
    )
}

export default Dashboard