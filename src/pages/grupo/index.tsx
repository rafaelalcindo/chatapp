import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import styles from './styles.module.scss';


export default function grupo() {
    return (
        <>
            <div className={styles.containerForm} >
                <section className={styles.telaCadastroGrupo} >
                    <h1>Cadastro de grupos</h1>

                    <div className={styles.fieldsDiv}>

                        <div className={styles.textDiv}>
                            <TextInput
                                id="nomegrupo"
                                label='Nome do Grupo'
                                name='nomegrupo'
                                type='text'
                            />
                        </div>

                    </div>

                    <div className={styles.buttonDiv}>
                        <div className={styles.buttonAction}>
                            <Button
                                type='button'
                                nome='Salvar'
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}