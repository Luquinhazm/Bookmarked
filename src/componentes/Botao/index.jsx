import './Botao.css'
import { useNavigate } from 'react-router-dom'

const Botao = (props) =>{
    const navigate = useNavigate()
    
    return (
        <>
        <button className='botao' onClick={()=> navigate(props.to)}>{props.nome}</button>
        </>
    )
}

export default Botao