import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type: 'button' | 'submit';
    nome: string;
}

export function Button({ type, nome, ...rest }: ButtonProps) {
    return (
        <div className={styles.buttonContainer} >
            <button
                type={type}
                {...rest}
            >
                {nome}
            </button>
        </div>
    )
}