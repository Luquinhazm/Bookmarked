import { Link } from 'react-router-dom';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = ({titulo}) => {
    const enviar = (e)=>{
        e.preventDefault()
    }


    return (
        <section className="formulario">
            <form onSubmit={enviar}>
                <h2>{titulo}</h2>
                <CampoTexto label='Email' placeholder='Digite seu email' />
                <CampoTexto label='Senha' placeholder='Digite sua senha' />
                <Botao to="/" nome='Entrar'/>
            </form>
            <Link to="/cadastro">Ou cadastre gratuitamente</Link>
        </section>
    )
}

export default Formulario 