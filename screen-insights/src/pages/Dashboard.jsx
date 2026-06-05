import styles from './Dashboard.module.css';

import Header from '../components/Header';

function Dashboard() {
    return (
        <main className={styles.container}>
            <Header />
        </main>
    )
}

export default Dashboard