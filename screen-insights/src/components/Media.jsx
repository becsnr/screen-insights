import styles from './Media.module.css';

import { FaLock, FaBell } from 'react-icons/fa6';

import { getMedia } from '../utils/getMedia';

function Media({ data }) {
    const media = getMedia(data);

    const cards = [
        {
            titulo: "Desbloqueios",
            total: media.unlocksTotal,
            diaria: media.unlocks,
            icone: FaLock
        },
        {
            titulo: "Notificações",
            total: media.notificationsTotal,
            diaria: media.notifications,
            icone: FaBell
        }
    ];

    // console.log(media);

    return (
        <div className={styles.container}>
            {cards.map(item => {
                const Icone = item.icone;
                
                return (
                    <div className={styles.card}>
                        <div className={styles.topo}>
                            <div className={styles.icone}>
                                <Icone />
                            </div>

                            <h2>{item.titulo}</h2>
                        </div>

                        <h3>{item.total}</h3>

                        <p>Média diária: {item.diaria}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Media