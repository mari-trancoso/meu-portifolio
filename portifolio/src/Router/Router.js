import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePagina } from "../Paginas/Home/Home"
import { SobrePagina } from "../Paginas/Sobre/Sobre"
import { StacksPagina } from "../Paginas/Stacks/Stacks"
import { ProjetosPagina } from "../Paginas/Projetos/Projetos"
import { ContatoPagina } from "../Paginas/Contato/Contato"
import { ErrorPagina }  from "../Paginas/Error/Error"

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePagina/>}/>
                <Route path="/sobre" element={<SobrePagina/>}/>
                <Route path="/stacks" element={<StacksPagina/>}/>
                <Route path="/projetos" element={<ProjetosPagina/>}/>
                <Route path="/contato" element={<ContatoPagina/>}/>
                <Route path="*" element={<ErrorPagina/>}/>
            </Routes>
        </BrowserRouter>

    )
    
}