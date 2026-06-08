import styles from './Calendario.module.css';

function Calendario({ days, daySelect }) {
    function handleDayClick(date) {
        daySelect(date);
    }

    return (
        <div className={styles.card}>
            <h3>Setembro</h3>

            <div className={styles.calendario}>
                <div className={styles.semana}>
                    <button>S1</button>
                    <button>S2</button>
                    <button>S3</button>
                    <button>S4</button>
                </div>

                <div className={styles.dia}>
                    {days.map(day => (
                        <button 
                            key={day.date} 
                            onClick={() => handleDayClick(day.date)} 
                        >
                            {day.day}
                        </button>
                    ))}
                </div>
            </div>

            <button>mês inteiro</button>
        </div>
    )
}

export default Calendario