import styled from "styled-components";

export const HomeContainer = styled.div`
    padding-left: 20px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    color: #445964;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const SecaoTextos = styled.section`
    p{
        font-size: 1.6rem;
    }

    h1{
        font: bold;
        padding: 24px 0 24px 0;
        font-size: 2rem;
    }

    button{
        margin-top: 80px;
        height: 5vh;
        width: 16vw;
        border: none;
        border-radius: 12px;
        background-color: #445964;
        font-family: 'Roboto', sans-serif;
        color: white;
        font-size: 1rem;
        cursor: pointer;

        :hover{
            height: 6vh;
            width: 17vw;
        }
    }
`

export const ImagemMulherPc = styled.img `
    width: 50vw;
    height: 88vh;
`