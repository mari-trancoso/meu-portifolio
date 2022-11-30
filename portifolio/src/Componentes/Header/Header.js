import { useNavigate } from "react-router-dom"
import { irParaHomePagina, irParaSobrePagina, irParaStacksPagina,  irParaProjetosPagina, irParaContatoPagina} from "../../Router/coordinatos"
import { HeaderContainer } from "./Header.styled"

export const Header = () => {
    const navigate = useNavigate()

    return(
        <HeaderContainer>
            <h1>Mariana Negrão Trancoso</h1>
            <section>
                <button onClick={() => irParaHomePagina(navigate)}>Home</button>
                <button onClick={() => irParaSobrePagina(navigate)}>Sobre</button>
                <button onClick={() => irParaStacksPagina(navigate)}>Stacks</button>
                <button onClick={() => irParaProjetosPagina(navigate)}>Projetos</button>
                <button onClick={() => irParaContatoPagina(navigate)}>Contato</button>
            </section>
        </HeaderContainer>
    )

}