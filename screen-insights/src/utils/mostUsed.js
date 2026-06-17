// APP + USADO
export function getMostUsed(data) {
    // DIA
    if (!Array.isArray(data)) {
        return [...data.apps]
        .sort((a, b) => b.minutes - a.minutes)
        .slice(0, 3)
    }

    // SEMANA / MÊS
    const lista = [];

    for (const day of data) {
        for (const app of day.apps) {
            const existe = lista.find(item => item.name === app.name);

            if (existe) {
                existe.minutes += app.minutes
            } else {
                lista.push({...app})
            }
        }
    }

    return lista.sort((a, b) => b.minutes - a.minutes).slice(0, 3);
}