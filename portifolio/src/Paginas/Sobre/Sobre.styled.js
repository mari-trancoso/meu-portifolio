import styled from "styled-components";

export const SobreContainer = styled.div `
    padding-left: 20px;
    padding-top: 40px;
    height: 120vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    color: #445964;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 20vw;
        height: 28vh;
    }
`
export const SecaoQuemEuSou = styled.section`
    text-align: center;
    width: 70vw;
    
    h3{
        padding-bottom: 20px;
        color: black;
    }

    p{
        padding-bottom: 20px;
        font-size: 0.9rem;
    }

`

export const TextoQuemEuSou = styled.p`
    padding: 20px;
    color: white;
    background-color: #445964;
    border-radius: 16px;
`

export const DivExperienciasFormaçoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 30px;
    
`

export const SecaoFormacoes = styled.section`
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    width: 40vw;
    margin-right: 28px;

    h3{
        margin-top: 12px;
    }

    span{
        text-align: left;
    }
`

export const SecaoExperiencias = styled.section`
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    width: 60vw;

    h3{
        margin-top: 12px;
    }

    span{
        text-align: left;
    }
`