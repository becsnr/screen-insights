// SEMANA E MÊS TOTAL
import { getTotalTime } from "./getTotalTime";

export function getDaysTotalData(week) {
    const soma = week.reduce((cont, day) => {
        cont += getTotalTime(day.apps);

        return cont;
    }, 0)

    return soma;
}