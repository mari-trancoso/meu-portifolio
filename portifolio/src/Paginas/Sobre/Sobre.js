import { Footer } from "../../Componentes/Footer/Footer"
import { Header } from "../../Componentes/Header/Header"
import { SobreContainer, SecaoQuemEuSou, DivExperienciasFormaçoes, SecaoFormacoes, SecaoExperiencias, TextoQuemEuSou } from "./Sobre.styled"
import FotoPerfil from "../../imagens/foto-perfil.png"

export const SobrePagina = () => {

    return(
        <>
        <Header/>
            <SobreContainer>
                <img src={FotoPerfil} alt="imagem Mariana perfil"/>
                <SecaoQuemEuSou>
                    <h3>Meu nome é Mariana, sou de Curitiba - PR e sou DEV!</h3>
                    <TextoQuemEuSou>Desenvolvedora Web FullStack em formação pelo bootcamp de
                    Desenvolvimento Web FullStack da Labenu, no qual pude desenvolver diversos
                    projetos que me ajudaram a ter habilidades técnicas com CSS, HTML,
                    Javascript, React, Git e Github.
                    Já trabalhei na área de meio ambiente em industrias alimentícias e
                    atualmente trabalho como comissária de vôo.
                    Tenho experiência com trabalho em equipe e ambientes dinâmicos. Prezo
                    pela comunicação, praticidade e clareza na realização de projetos.
                    </TextoQuemEuSou>
                    <DivExperienciasFormaçoes>
                        <SecaoFormacoes>
                            <h3>Formações</h3>
                            <span>
                                <li>WEB FULL STACK - LABENU</li>
                                <p>Agosto/2022 - Fevereiro/2023</p>
                            </span>
                            <span>
                                <li>ENGENHARIA AMBIENTAL - PUC-PR</li>
                                <p>Janeiro/2012 - Dezembro/2016</p>
                            </span>
                        </SecaoFormacoes>
                        <SecaoExperiencias>
                            <h3>Experiências Profissionais</h3>
                                <span>
                                    <li>GOL LINHAS ÁREAS</li>
                                    <p>Comissária de Vôo - Maio/2019 - Atualmente</p>
                                    <p>Verificar a segurança de voo antes, durante e após a decolagem, atender
                                    às solicitações dos passageiros à bordo e à qualquer emergência que possa
                                    ocorrer.
                                    </p>
                                </span>
                                <span>
                                    <li>PEPSICO</li>
                                    <p>Assistente de Meio Ambiente - Março/2018 - Setembro/2018</p>
                                    <p>Responsável pela área com foco em indicadores ambientais de água,
                                    energia e resíduos, gerenciamento de resíduos, auditorias e licenciamento
                                    ambiental.
                                    </p>
                                </span>
                        </SecaoExperiencias>
                    </DivExperienciasFormaçoes>
                </SecaoQuemEuSou>
            </SobreContainer>
        <Footer/>
        </>
    )

}