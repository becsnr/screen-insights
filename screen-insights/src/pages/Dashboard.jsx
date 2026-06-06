import styles from './Dashboard.module.css';

import Header from '../components/Header';
import TempoTotal from '../components/TempoTotal';
import Calendario from '../components/Calendario';
import Media from '../components/Media';
import Destaque from '../components/Destaque';

function Dashboard() {
    return (
        <main className={styles.container}>
            <Header />

            <section className={styles.cards}>
                <TempoTotal />

                <div className={styles.grupo}>
                    <Media />

                    <Calendario />
                </div>
            </section>

            <Destaque />
        </main>
    )
}

export default Dashboard