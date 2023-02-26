import './CampoTexto.css'

const CampoTexto = (props) =>{
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required='true' placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto