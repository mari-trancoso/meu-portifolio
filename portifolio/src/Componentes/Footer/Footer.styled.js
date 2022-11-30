import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 20vh;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    color: white;
    background-color: #445964;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        
    }

`
export const SecaoBotoes = styled.section`

    display: flex;
    flex-direction: row;

    p{
        margin-right: 20px;
    }

    span{
        display: flex;
        flex-direction: row;

        button{
            margin-right: 10px;
            height: 4vh;
            padding: 4px;
            border: none;
            border-radius: 8px;
            font-family: 'Roboto', sans-serif;
            color: #445964;
            font-size: 0.8rem;
            cursor: pointer;

            :hover{
                font-weight: bold;
            }
        }
    }
`

export const SecaoIcones = styled.section`

    p{
        padding-bottom: 20px;
    }

    img{
            background-color: white;
            width: 3vw;
            height: 4vh;
            padding: 4px;
            margin-right: 12px;
            border-radius: 8px;
        }

`
