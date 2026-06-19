// PORCENTAGEM DAS CATEGORIAS 
export function getCategory(data) {
    if (!Array.isArray(data)) {
        data = [data];
    }

    const lista = [];

    for (const day of data) {
        for (const app of day.apps) {
            const existe = lista.find(
                item => item.category === app.category
            );

            if (existe) {
                existe.minutes += app.minutes;
            } else {
                lista.push({
                    category: app.category,
                    minutes: app.minutes,
                });
            }
        }
    }

    const total = lista.reduce((total, categoria) => {
        return total + categoria.minutes; 
    }, 0);

    const porcentagens = lista.map(categoria => ({
        category: categoria.category,
        minutes: categoria.minutes,
        percentage: Math.round((categoria.minutes / total) * 100)
    }));

    return porcentagens.sort((a, b) => b.minutes - a.minutes);
}