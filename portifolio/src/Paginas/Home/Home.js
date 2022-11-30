import { useNavigate } from "react-router-dom"
import { Footer } from "../../Componentes/Footer/Footer"
import { Header } from "../../Componentes/Header/Header"
import ImagemMulherProgamadora from "../../imagens/mulher-programadora.jpg"
import { HomeContainer, ImagemMulherPc, SecaoTextos } from "./Home.styled"
import { irParaSobrePagina } from "../../Router/coordinatos"

export const HomePagina = () => {
    const navigate = useNavigate()

    return(
        <>
        <Header/>
        <HomeContainer>
                <SecaoTextos>
                    <p>Olá pessoas!</p>
                    <h1>EU SOU UMA DESENVOLVEDORA WEB</h1>
                    <p>Seja bem-vindo ao meu portifólio online.</p>
                    <button onClick={() => irParaSobrePagina(navigate)}>Saiba mais sobre mim</button>
                </SecaoTextos>
                <section>
                    <ImagemMulherPc src={ImagemMulherProgamadora} alt="mulher sentada programando" />
                </section>
        </HomeContainer>
        <Footer/>
        </>
    )

}