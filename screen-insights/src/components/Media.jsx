import styles from './Media.module.css';

import { FaLock, FaBell } from 'react-icons/fa6';

import { getMedia } from '../utils/getMedia';

function Media({ data }) {
    const media = getMedia(data);

    console.log(media);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.topo}>
                    <div className={styles.icone}>
                        <FaLock />
                    </div>
                    <h2>Desbloqueios</h2>
                </div>

                <h3>{media.unlocksTotal}</h3>
                <p>Média diária: {media.unlocks}</p>
            </div>

            <div className={styles.card}>
                <div className={styles.topo}>
                    <div className={styles.icone}>
                        <FaBell />
                    </div>
                    <h2>Notificações</h2>
                </div>

                <h3>{media.notificationsTotal}</h3>
                <p>Média diária: {media.notifications}</p>
            </div>
        </div>
    )
}

export default Media