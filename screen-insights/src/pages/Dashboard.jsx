import styles from './Dashboard.module.css';

import Header from '../components/Header';
import TempoTotal from '../components/TempoTotal';
import Calendario from '../components/Calendario';
import Media from '../components/Media';
import Destaque from '../components/Destaque';
import Categoria from '../components/Categoria';

import { useState } from 'react';
import { getDayData } from '../services/getDate';

function Dashboard({ data }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const dayData = selectedDate ? getDayData(selectedDate) : null;

    return (
        <main className={styles.container}>
            <Header />

            <section className={styles.cards}>
                <TempoTotal />

                <div className={styles.grupo}>
                    <Media />
                    <Calendario days={data} daySelect={setSelectedDate} />
                </div>
                
                <Destaque />
                <Categoria />
            </section>
        </main>
    )
}

export default Dashboard