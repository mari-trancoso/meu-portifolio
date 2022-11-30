import styled from "styled-components";

export const HeaderContainer = styled.div `
    font-family: 'Roboto', sans-serif;
    color: #445964;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    width: 100%;

    h1{
        padding: 36px;
    }

    section {
        width: 40vw;
        margin-left: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-left: 36px;

        button {
            border: none;
            background-color: white;
            font-family: 'Roboto', sans-serif;
            color: #445964;
            font-size: 1rem;
            cursor: pointer;

            :hover{
                font-weight: bold;
            }
        }
    }

`

