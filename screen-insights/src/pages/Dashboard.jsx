import styles from './Dashboard.module.css';

import Header from '../components/Header';
import TempoTotal from '../components/TempoTotal';
import Calendario from '../components/Calendario';
import Media from '../components/Media';
import Destaque from '../components/Destaque';
import Categoria from '../components/Categoria';

import { useState } from 'react';
import { getDayData, getWeekData } from '../services/getDate';

function Dashboard({ data }) {
    const [selectedDate, setSelectedDate] = useState(data[7].date);

    const [selectedWeek, setSelectedWeek] = useState(null);

    const dayData = selectedDate ? getDayData(selectedDate) : null;

    const weekData = selectedWeek ? getWeekData(selectedWeek) : null;

    function handleDaySelect(date) {
        setSelectedDate(date);
        setSelectedWeek(null);
    }

    function handleWeekSelect(week) {
        setSelectedWeek(week);
        setSelectedDate(null);
    }

    const dataShow = weekData || dayData;

    // console.log(weekData)

    return (
        <main className={styles.container}>
            <Header />

            <section className={styles.cards}>
                <TempoTotal data={dataShow} />

                <div className={styles.grupo}>
                    <Media />
                    <Calendario
                        days={data} 
                        daySelect={handleDaySelect} 
                        selectedDate={selectedDate} 
                        weekSelect={handleWeekSelect} 
                        selectedWeek={selectedWeek} 
                    />
                </div>
                
                <Destaque />
                <Categoria />
            </section>
        </main>
    )
}

export default Dashboard