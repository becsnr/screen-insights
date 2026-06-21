// MÉDIA DESBLOQUEIO E NOTIFICAÇÕES
export function getMedia(data) {
    if (!Array.isArray(data)) {
        return {
            notificationsTotal: data.notifications,
            notifications: data.notifications,
            unlocksTotal: data.unlocks,
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
        notificationsTotal: totalNotifications,
        notifications: Math.round(totalNotifications / data.length),
        unlocksTotal: totalUnlocks,
        unlocks: Math.round(totalUnlocks / data.length),
    }
}