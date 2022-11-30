import { Footer } from "../../Componentes/Footer/Footer"
import { Header } from "../../Componentes/Header/Header"
import iconeJS from "../../imagens/js.svg"
import iconeCSS from "../../imagens/css.svg"
import iconeHTML from "../../imagens/html.svg"
import iconeReact from "../../imagens/react.svg"
import { StacksContainer, Imagens, SecaoOutrasHabilidades } from "./Stacks.styled"

export const StacksPagina = () => {

    return(
        <>
        <Header/>
            <StacksContainer>
                <h2>
                    Minhas Stacks
                </h2>
                <Imagens>
                    <img src={iconeJS} alt="Javascript"/>
                    <img src={iconeCSS} alt="css"/>
                    <img src={iconeHTML} alt="html"/>
                    <img src={iconeReact} alt="react"/>
                </Imagens>
                <SecaoOutrasHabilidades>
                    <h3>Outras habilidades</h3>
                    <span>
                        <p>Lógica de Programação</p>
                        <p>Styled-Components</p>
                        <p>Git e Github</p>
                        <p>Responsividade</p>
                        <p>Custom Hooks</p>
                        <p>React Routers</p>
                        <p>Inglês Avançado</p>
                    </span>
                </SecaoOutrasHabilidades>
            </StacksContainer>
        <Footer/>
        </>
    )

}