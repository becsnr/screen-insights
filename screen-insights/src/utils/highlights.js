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