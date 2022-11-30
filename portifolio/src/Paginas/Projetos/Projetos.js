import { Footer } from "../../Componentes/Footer/Footer"
import { Header } from "../../Componentes/Header/Header"
import { ProjetosContainer, Titulo, ProjetosListados, ListaSeriesProjeto, AgenciavIagensProjeto, LinkSite} from "./Projetos.styled"

export const ProjetosPagina = () => {

    return(
        <>
        <Header/>
        <ProjetosContainer>
            <Titulo>
                <h2>
                    Meus Projetos
                </h2>
            </Titulo>
            <ProjetosListados>
                <ListaSeriesProjeto>
                    <h3>Lista de séries</h3>
                    <p>Site com indicações de séries para você ver!</p>
                    <section>
                        <ul>
                            <p>Principais estruturas utilizadas:</p>
                            <li>Itens listados utilizando manipulação do DOM</li>
                            <li>Barra de pesquisa</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                        <LinkSite href="https://mari-trancoso.github.io/projeto-introducao-web/">Confira aqui!</LinkSite>
                    </section>
                </ListaSeriesProjeto>
                <AgenciavIagensProjeto>
                    <h3>Agência de Viagens Espaciais</h3>
                    <p>Site de uma agência de viagens espaciais para você deixar este planeta!</p>
                    <section>
                        <ul>
                            <p>Principais estruturas utilizadas:</p>
                            <li>React</li>
                            <li>Styled-components</li>
                            <li>JSX</li>
                            <li>Renderização de telas</li>
                            <li>Renderização de listas</li>
                            <li>Filtros de busca e ordenação</li>
                            <li>Props</li>
                        </ul>
                        <LinkSite href="https://agenciamntviagensespaciais.surge.sh/">Confira aqui!</LinkSite>
                    </section>
                </AgenciavIagensProjeto>
            </ProjetosListados>
        </ProjetosContainer>  
        <Footer/>
        </>
    )

}