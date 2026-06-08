import screenTimeData from '../data/screenTimeData.json';

// DIA
export function getDayData(date) {
    return screenTimeData.find(
        day => day.date === date
    );
}