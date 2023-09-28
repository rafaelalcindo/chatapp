import styles from './styles.module.scss';
import Link from 'next/link';

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
                    <Link href={'/chatroom'} className={styles.link_chat} >#Sala reunião</Link>
                    <Link href={'/chatroom'} className={styles.link_chat}>#Sala Principal</Link>
                    <Link href={'/chatroom'} className={styles.link_chat}>#Sala Mestres</Link>
                    <hr />
                    <Link href={'/chatroom'} className={styles.link_chat}>#Concetração</Link>
                    <Link href={'/chatroom'} className={styles.link_chat}>#reunião</Link>

                </div>

                <div className={styles.menuConversation}>
                    <h2>{children}</h2>
                </div>


            </div>
        </>
    );
}