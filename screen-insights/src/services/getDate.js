import screenTimeData from '../data/screenTimeData.json';

// DIA
export function getDayData(date) {
    return screenTimeData.find(
        day => day.date === date
    );
}

// SEMANA E MÊS
export function getDaysData(week) {
    const startDay = (week - 1) * 7 + 1;
    const endDay = startDay + 6;

    return screenTimeData.filter(
        date => date.day >= startDay && date.day <= endDay
    );
}