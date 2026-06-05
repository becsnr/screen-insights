import styles from './Dashboard.module.css';

import Header from '../components/Header';
import TempoTotal from '../components/TempoTotal';

function Dashboard() {
    return (
        <main className={styles.container}>
            <Header />

            <section className={styles.cards}>
                <TempoTotal />
            </section>
        </main>
    )
}

export default Dashboard