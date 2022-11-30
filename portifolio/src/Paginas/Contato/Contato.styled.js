import styled from "styled-components";

export const ContatoContainer = styled.div`
    padding: 20px;
    height: 66vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    color: #445964;

    h2{
        color: black;
        margin-top: 40px;
        margin-bottom: 40px;
    }
`

export const Conteudo = styled.div`
    display: flex;
    flex-direction: row;

    span{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 40px;
        border: 5px outset #1C6EA4;
        border-radius: 10px;
        
        p{
            margin: 12px;
            font-size: 1.8rem;
        }

        img{
            width: 6vw;
            height: 6vh;
            padding-bottom: 10px;
        }
        
    }
`