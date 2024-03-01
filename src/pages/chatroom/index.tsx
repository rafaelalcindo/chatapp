import { FaHashtag, FaPlay } from 'react-icons/fa';

import styles from './styles.module.scss';
import ScreenParts from '../../components/ScreenParts';
import Conversation from '../../components/ChatParts/Conversation';

export default function painel() {
    return (
        <>
            <ScreenParts>
                <div className={styles.headerTop}>
                    <div className={styles.headerIcon} >
                        <FaHashtag
                            size={25}
                            color='#6c7079'
                        />
                    </div>
                    <div>
                        Sala Principal
                    </div>
                </div>
                <div className={styles.roomSpace}>

                    <Conversation
                        name='Rafael Alcindo de Lima'
                        dateCreated='14/02/2023'
                        messageChat='Vamos Criar Essa conversação para melhorar a situação'
                        colorAvatar='blue'
                    />

                    <Conversation
                        name='Helen Alcinda'
                        dateCreated='14/02/2023'
                        messageChat='Oi Pai, muito bom te ver porarqui'
                        colorAvatar='yellow'
                    />


                </div>
                <div className={styles.sendInput}>
                    <div className={styles.inputDiv}>
                        <textarea className={styles.inputMessage} />

                        <FaPlay
                            className={styles.sendIcon}
                        />

                    </div>
                </div>
            </ScreenParts>
        </>
    );
}