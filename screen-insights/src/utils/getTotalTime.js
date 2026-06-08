// TEMPO TOTAL
export function getTotalTime(apps) {
    return apps.reduce((total, app) => 
        total + app.minutes, 
        0
    );
}