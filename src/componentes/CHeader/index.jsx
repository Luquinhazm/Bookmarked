import FotoUser from '../FotoUser'
import Logo from '../Logo'
import './CHeader.css'

const CHeader = ()=>{
    return(
        <header className='CHeader'>
            <div className='wrapper-nav'>
                <Logo tamanho='24px'/>
                <nav>
                <ul>
                    <li>
                        <a href="">Pagina Inicial</a>
                    </li>
                    <li>
                        <a href="">Explorar</a>
                    </li>
                    <li>
                        <a href="">Notificação</a>
                    </li>
                </ul>
            </nav>
            </div>
           <FotoUser/>
        </header>
    )
}

export default CHeader

