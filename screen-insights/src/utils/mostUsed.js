import { getDayData } from "../services/getDate";

// APP + USADO DIA
export function getMostUsedDay(date) {
    const day = getDayData(date);

    const apps = day.apps;

    const appsOrdenados = [...apps].sort(
        (a, b) => b.minutes - a.minutes
    );

    return appsOrdenados.slice(0, 3);

    // return apps.sort((a, b) => {b.minutes - a.minutes});

    // return day.apps.reduce((acc, time) => {
    //     return acc.minutes > time.minutes ? acc : time;
    // }, day.apps[0]);
}