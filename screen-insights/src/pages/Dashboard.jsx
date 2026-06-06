import styles from './Dashboard.module.css';

import Header from '../components/Header';
import TempoTotal from '../components/TempoTotal';
import Calendario from '../components/Calendario';

function Dashboard() {
    return (
        <main className={styles.container}>
            <Header />

            <section className={styles.cards}>
                <TempoTotal />

                <Calendario />
            </section>
        </main>
    )
}

export default Dashboard