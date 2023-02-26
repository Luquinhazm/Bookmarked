
import Botao from '../../componentes/Botao';
import Formulario from '../../componentes/Formulario';
import './BemVindo.css'

const BemVindo = () =>{
  return (
    <section className='secao'>
      <div className='texto-container'>
        <h1>Bookmarked.</h1>
        <p>Sua nova plataforma para descobrir e compartilhar seus livros favoritos. Encontre novas leituras e conecte-se com outros leitores em todo o mundo.</p>
      </div>
      <Formulario titulo="Faça seu login"/>
    </section>
  );
}

export default BemVindo;