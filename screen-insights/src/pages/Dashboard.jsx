import styles from './Dashboard.module.css';

import Header from '../components/Header';
import TempoTotal from '../components/TempoTotal';
import Calendario from '../components/Calendario';
import Media from '../components/Media';
import Destaque from '../components/Destaque';
import Categoria from '../components/Categoria';

import { useState } from 'react';
import { getDayData, getDaysData } from '../services/getDate';

function Dashboard({ data }) {
    const [selectedDate, setSelectedDate] = useState(data[7].date);

    const [selectedWeek, setSelectedWeek] = useState(null);

    const [selectedMonth, setSelectedMonth] = useState(false);

    const dayData = selectedDate ? getDayData(selectedDate) : null;

    const weekData = selectedWeek ? getDaysData(selectedWeek) : null;

    const monthData = data;

    function handleDaySelect(date) {
        setSelectedDate(date);
        setSelectedWeek(null);
        setSelectedMonth(false);
    }

    function handleWeekSelect(week) {
        setSelectedWeek(week);
        setSelectedDate(null);
        setSelectedMonth(false);
    }

    function handleMonthSelect() {
        setSelectedMonth(true);
        setSelectedWeek(null);
        setSelectedDate(null);
    }

    let dataShow;

    if (selectedMonth) {
        dataShow = monthData;
    } else if (selectedWeek) {
        dataShow = weekData;
    } else if (selectedDate) {
        dataShow = dayData;
    }

    // console.log(monthData)

    return (
        <main className={styles.container}>
            <Header />

            <section className={styles.cards}>
                <TempoTotal data={dataShow} />

                <div className={styles.grupo}>
                    <Media data={dataShow} />
                    <Calendario
                        days={data} 
                        daySelect={handleDaySelect} 
                        selectedDate={selectedDate} 
                        weekSelect={handleWeekSelect} 
                        selectedWeek={selectedWeek} 
                        monthSelect={handleMonthSelect}
                        selectedMonth={selectedMonth}
                    />
                </div>
                
                <Destaque />
                <Categoria />
            </section>
        </main>
    )
}

export default Dashboard