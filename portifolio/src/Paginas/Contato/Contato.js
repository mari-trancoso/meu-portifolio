import { Footer } from "../../Componentes/Footer/Footer"
import { Header } from "../../Componentes/Header/Header"
import { ContatoContainer, Conteudo } from "./Contato.styled"
import imagemLinkedin from "../../imagens/linkedin.svg"
import imagemGithub from "../../imagens/github.svg"
import imagemEmail from "../../imagens/mail.svg"

export const ContatoPagina = () => {

    return(
        <>
            <Header/>
            <ContatoContainer>
                <h2>Meus Contatos</h2>
                <Conteudo>
                    <span>
                        <p>mnegraotrancoso@gmail.com</p>
                        <a href="mailto:mnegraotrancoso@gmail.com">
                            <img src={imagemEmail} alt="icone envelope"/>
                        </a>
                    </span>
                    <span>
                        <p>Linkedin</p>
                        <a href="https://www.linkedin.com/in/mariana-negrao-trancoso-a17921b9/">
                            <img src={imagemLinkedin} alt="icone Linkedin"/>
                        </a>
                    </span>
                    <span>
                        <p>Github</p>
                        <a href="https://github.com/mari-trancoso">
                            <img src={imagemGithub} alt="icone Github"/>
                        </a>
                    </span>
                </Conteudo>
            </ContatoContainer>
            <Footer/>
        </>
    )

}