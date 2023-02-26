import { Link } from 'react-router-dom';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import './FormularioCadastro.css'

const FormularioCadastro = ({titulo}) => {
    const enviar = (e)=>{
        e.preventDefault()
    }

    return (
        <section className="formulario-cadastro">
            <form onSubmit={enviar}>
                <h2>{titulo}</h2>
                <CampoTexto label='Nome' placeholder='Digite seu Nome' />
                <CampoTexto label='Email' placeholder='Digite seu email' />
                <CampoTexto label='Senha' placeholder='Digite sua senha' />
                <CampoTexto label='Senha Novamente' placeholder='Digite sua senha novamente' />
                <Botao to="/" nome='Criar'/>
            </form>
            <Link to="/cadastro">Ou cadastre gratuitamente</Link>
        </section>
    )
}

export default FormularioCadastro