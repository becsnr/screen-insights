export function formatMinutes(minutes) {
    const horas = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${horas}h ${mins}min`;
}