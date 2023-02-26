import FormularioCadastro from '../../componentes/FormularioCadastro'
import Logo from '../../componentes/Logo'
import './CadastroPage.css'

const Cadastro = ()=>{
    return(
    <section className='secao-cadastro'>
      <div className='texto-container'>
        <Logo tamanho='64px'/>
        <p>Sua nova plataforma para descobrir e compartilhar seus livros favoritos. Encontre novas leituras e conecte-se com outros leitores em todo o mundo.</p>
      </div>
     <FormularioCadastro titulo="Cadastre-se"/>
    </section>
    )
}

export default Cadastro