import styles from './Calendario.module.css';

function Calendario({ days, daySelect, selectedDate, weekSelect, selectedWeek, monthSelect, selectedMonth }) {
    function handleDayClick(date) {
        daySelect(date);
    }

    function handleWeekClick(week) {
        weekSelect(week);
    }

    function handleMounthClick() {
        monthSelect();
    }

    return (
        <div className={styles.card}>
            <h3>Setembro</h3>

            <div className={styles.calendario}>
                <div className={styles.semana}>
                    {[1, 2, 3, 4, 5].map(week => (
                        <button
                            key={week}
                            onClick={() => handleWeekClick(week)}
                            className={selectedWeek === week ? styles.active : ""}
                        >
                            S{week}
                        </button>
                    ))}
                </div>

                <div className={styles.dias}>
                    {days.map(day => (
                        <button 
                            key={day.date} 
                            onClick={() => handleDayClick(day.date)}
                            className={selectedDate === day.date ? styles.active : ""}
                        >
                            {day.day}
                        </button>
                    ))}
                </div>
            </div>

            <button 
                onClick={() => handleMounthClick()}
                className={`${styles.mes} ${selectedMonth ? styles.mesActive : ""}`}
            >
                mês inteiro
            </button>
        </div>
    )
}

export default Calendario