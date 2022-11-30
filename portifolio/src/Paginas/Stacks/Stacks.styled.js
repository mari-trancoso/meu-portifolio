import styled from "styled-components";

export const StacksContainer = styled.div `
    /* margin: 20px; */
    padding-left: 20px;
    padding-bottom: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    h2{
        color: black;
        margin-top: 40px;
    }
`
export const Imagens = styled.div `
    width: 40vw;
    display: flex;
    justify-content: space-around;
    margin: 40px;

    img{
        width: 4vw;
    }
`

export const SecaoOutrasHabilidades = styled.section`

    h3{
        margin: 20px;
        text-align: center;
    }

    span{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        p{
            margin: 20px;
            padding: 8px;
            background-color: gray;
            color: white;
            border-radius: 10px;
        }
    }
`