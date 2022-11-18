import styles from './styles.module.scss';

interface TextInputProps {
    label: string;
    id: string;
    name: string;
    type: string;
}

export function TextInput({ label, id, name, type }: TextInputProps) {

    return (
        <section className={styles.container}>
            <label>{label}:</label>
            <div className={styles.inputDiv}>
                <input type={type} id={id} name={name} />
            </div>

        </section >
    );

}