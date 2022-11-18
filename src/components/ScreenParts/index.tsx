import styles from './styles.module.scss';

import Image from 'next/image';

import eagleImage from '../../assets/image/eagleicon.jpg';
import icon1 from '../../assets/image/icon1.webp';

interface LayoutScreen {
    children: React.ReactNode;
}

export default function ScreenParts({ children }: LayoutScreen) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.menuRight}>
                    <div className={styles.containerLogo}>
                        <Image
                            src={eagleImage}
                            alt="logo"
                            className={styles.logoBroadcast}
                        />

                    </div>

                    <div className={styles.containerLogo}>
                        <Image
                            src={icon1}
                            alt="logo"
                            className={styles.logoBroadcast}
                        />

                    </div>

                </div>

                <div className={styles.menuRightRooms}>
                    <h4>#Sala reunião</h4>
                    <h4>#Sala Principal</h4>
                    <h4>#Sala Mestres</h4>
                    <hr />
                    <h4>#Concetração</h4>
                    <h4>#reunião</h4>

                </div>

                <div className={styles.menuConversation}>
                    <h2>{children}</h2>
                </div>


            </div>
        </>
    );
}