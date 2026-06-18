import { getScreenTimeData } from "../services/getScreenTimeData";  

import { getMostUsed } from "./mostUsed";
import { getTotalTime } from "./getTotalTime";

// APP + USADO
export function appHighlights() {
    const app = getMostUsed(getScreenTimeData())[0];

    return app;
}

// DIA COM MAIOR USO
export function dayHighlights() {
    const data = getScreenTimeData();

    let maior = data[0];

    for (const day of data) {
        const totalDay = getTotalTime(day.apps);
        const totalMaior = getTotalTime(maior.apps);

        if (totalDay > totalMaior) {
            maior = day;
        }
    }

    return maior;
}

// CATEGORIA FAVORITA
export function favCategory() {
    const data = getScreenTimeData();

    const lista = [];

    for (const day of data) {
        for (const app of day.apps) {
            const existe = lista.find(item => item.category === app.category);

            if (existe) {
                existe.minutes += app.minutes
            } else {
                lista.push({
                    category: app.category,
                    minutes: app.minutes
                })
            }
        }
    }

    return lista.sort((a, b) => b.minutes - a.minutes)[0];
}