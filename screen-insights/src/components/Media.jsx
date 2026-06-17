import styles from './Media.module.css';

import { getMedia } from '../utils/getMedia';

function Media({ data }) {
    const media = getMedia(data);

    console.log(data);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Desbloqueios</h2>
                <h3>Média diária: {media.unlocks}</h3>
            </div>

            <div className={styles.card}>
                <h2>Notificações</h2>
                <h3>Média diária: {media.notifications}</h3>
            </div>
        </div>
    )
}

export default Media