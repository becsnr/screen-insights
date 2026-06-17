// MÉDIA DESBLOQUEIO E NOTIFICAÇÕES
export function getMedia(data) {
    if (!Array.isArray(data)) {
        return {
            notifications: data.notifications,
            unlocks: data.unlocks,
        };
    }

    let totalNotifications = 0;
    let totalUnlocks = 0;

    for (const day of data) {
        totalNotifications += day.notifications;
        totalUnlocks += day.unlocks;
    }

    return {
        notifications: Math.round(totalNotifications / data.length),
        unlocks: Math.round(totalUnlocks / data.length),
    }
}