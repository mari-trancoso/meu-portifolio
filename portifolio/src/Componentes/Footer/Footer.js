import { FooterContainer, SecaoBotoes, SecaoIcones} from "./Footer.styled"
import imagemLinkedin from "../../imagens/linkedin.svg"
import imagemGithub from "../../imagens/github.svg"
import imagemEmail from "../../imagens/mail.svg"
import { useNavigate } from "react-router-dom"
import { irParaContatoPagina, irParaSobrePagina, irParaHomePagina,  irParaProjetosPagina, irParaStacksPagina} from "../../Router/coordinatos"


export const Footer = () => {

    const navigate = useNavigate()

    return (
        <FooterContainer>
            <div>
                <SecaoBotoes>
                    <p>Navegue por:</p>
                    <span>
                        <button onClick={() => irParaHomePagina(navigate)}>Home</button>
                        <button onClick={() => irParaSobrePagina(navigate)}>Sobre</button>
                        <button onClick={() => irParaStacksPagina(navigate)}>Stacks</button>
                        <button onClick={() => irParaProjetosPagina(navigate)}>Projetos</button>
                        <button onClick={() => irParaContatoPagina(navigate)}>Contato</button>
                    </span>
                </SecaoBotoes>
                
                <SecaoIcones>
                    <p>Feito por Mariana Negrão Trancoso 2022</p>
                    <a href="https://www.linkedin.com/in/mariananegraotrancoso/">
                        <img src={imagemLinkedin} alt="icone Linkedin"/>
                    </a>
                    <a href="https://github.com/mari-trancoso">
                        <img src={imagemGithub} alt="icone Github"/>
                    </a>
                    <a href="mailto:mnegraotrancoso@gmail.com">
                        <img src={imagemEmail} alt="icone envelope"/>
                    </a>
                </SecaoIcones>
            </div>
        </FooterContainer>
    )
}