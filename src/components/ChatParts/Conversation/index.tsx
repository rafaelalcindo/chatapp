import styles from './styles.module.scss';
import { FaUserCircle } from 'react-icons/fa';

type ConversatioProps = {
    typeSender?: boolean;
    name: string;
    dateCreated: string;
    messageChat: string;
    colorAvatar: string;
}

export default function Conversation(
    {
        typeSender,
        name,
        dateCreated,
        messageChat,
        colorAvatar

    }: ConversatioProps
) {
    return (
        <div className={styles.conversationSpace}>
            <hr />
            <div className={styles.imageAvatar}>
                <FaUserCircle color={colorAvatar} size={50} />
            </div>
            <div className={styles.messegeSender} >
                <div className={styles.nameAndDate} >
                    <span className={styles.name} > {name} </span>
                    <span className={styles.DateCreated} >{dateCreated}</span>
                </div>
                <div className={styles.chatMessage} >
                    <p>{messageChat}</p>
                </div>
            </div>
        </div>
    );
}