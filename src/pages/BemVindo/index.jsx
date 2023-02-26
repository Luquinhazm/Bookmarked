import Formulario from '../../componentes/Formulario';
import Logo from '../../componentes/Logo';
import './BemVindo.css'

const BemVindo = () =>{
  return (
    <section className='secao'>
      <div className='texto-container'>
        <Logo tamanho='64px'/>
        <p>Sua nova plataforma para descobrir e compartilhar seus livros favoritos. Encontre novas leituras e conecte-se com outros leitores em todo o mundo.</p>
      </div>
      <Formulario titulo="Faça seu login"/>
    </section>
  );
}

export default BemVindo;