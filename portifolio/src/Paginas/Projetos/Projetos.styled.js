import styled from "styled-components";

export const ProjetosContainer = styled.div`
    /* margin: 20px; */
    padding-left: 20px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    color: #445964;
`

export const Titulo = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;

    h2{
        color: black;
    }

    p{
        margin-left: 80px;
    }
`

export const ProjetosListados = styled.div`
    margin: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const ListaSeriesProjeto = styled.section`
    background-color: #263138;
    color: white;
    padding: 40px;
    border-radius: 25px 0px 25px 0px;
    width: 40vw;

    h3{
        border-bottom: 1px solid white
    }

    p{
        margin-top: 12px;
    }

    section{
        display: flex;
        flex-direction: row;
    }
`

export const AgenciavIagensProjeto = styled.section`
    background-color: #445964;
    color: white;
    padding: 40px;
    border-radius: 25px 0px 25px 0px;
    width: 40vw;

    h3{
        border-bottom: 1px solid white
    }

    p{
        margin-top: 12px;
    }

    section{
        display: flex;
        flex-direction: row;
    }
`

export const LinkSite = styled.a` 
    text-decoration: none;
    color: black;
    background-color: white;
    padding: 4px;
    border-radius: 10px;
    height: fit-content;
    margin-left: auto;
    margin-top: auto;

`