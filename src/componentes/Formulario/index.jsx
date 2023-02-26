import { Link } from 'react-router-dom';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = ({titulo}) => {
    return (
        <section className="formulario">
            <form>
                <h2>{titulo}</h2>
                <CampoTexto label='Email' placeholder='Digite seu email' />
                <CampoTexto label='Senha' placeholder='Digite sua senha' />
                <Botao>
                    <Link to="/inicio">Entrar</Link>
                </Botao>
            </form>
        </section>
    )
}

export default Formulario 