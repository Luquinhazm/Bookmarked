import BotaoAdicionar from '../../componentes/BotaoAdicionar';
import CardPublicacao from '../../componentes/CardPublicacao';
import CHeader from '../../componentes/CHeader';

const Sobre = () => {
    return (
        <main>
           <CHeader/>
           <CardPublicacao/>
           <CardPublicacao/>
           <CardPublicacao/>
           <BotaoAdicionar/>
        </main>
    );
}

export default Sobre;