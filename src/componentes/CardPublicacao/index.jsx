import FotoUser from '../FotoUser'
import ImagemLivro from '../ImagemLivro'
import './CardPublicacao.css'

const CardPublicacao = ()=>{
    return(
        <div className='card-publicacao'>
            <div className='wrapper-imagens'>
                <FotoUser className='foto-user'/>
                <span className='nome-usuario'>Luquinhazm</span>
                <ImagemLivro/>
            </div>
            <div className='wrapper-textos'>
                <div className='infos-livro'>
                    <h2>O Pais do Carnaval</h2>
                    <span>Jorge Amado</span>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, deleniti, sequi ipsum, dolores nam dolorum voluptates eligendi quia sapiente expedita nulla numquam laboriosam ipsa ducimus explicabo omnis ut alias excepturi necessitatibus dolorem odit. Voluptates sequi, quis reprehenderit inventore fugiat recusandae aut a praesentium quas quia aliquid accusantium sit nobis neque.</p>
                </div>
            <div className='reacao'>
                <span>Curtidas</span>
                <span>Comentario</span>
            </div>
            </div>
        </div>
    )
}

export default CardPublicacao