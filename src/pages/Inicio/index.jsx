import BotaoAdicionar from '../../componentes/BotaoAdicionar';
import CardPublicacao from '../../componentes/CardPublicacao';
import CHeader from '../../componentes/CHeader';

const Sobre = () => {
    return (
        <div>
           <CHeader/>
           <CardPublicacao/>
           <CardPublicacao/>
           <CardPublicacao/>
           <BotaoAdicionar/>
        </div>
    );
}

export default Sobre;