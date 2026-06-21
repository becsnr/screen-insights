export function formatMinutes(minutes) {
    const horas = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (horas === 0) {
        return `${mins}min`;
    }

    return `${horas}h ${mins}min`;
}