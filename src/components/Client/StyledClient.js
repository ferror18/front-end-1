import styled from 'styled-components'


export const StyledButton = styled.button`
    width: 20%;
    background-color: #84C3E0;
    font-size: 1rem;

    &:hover{
        cursor: pointer;
    }

    &:disabled{
        color: crimson;
        background-color: white;
        border: 3px solid crimson;
        cursor: not-allowed;
    }
`

export const StyledForm = styled.form`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    margin: 5%;
    padding: 5%;
    background-color: #84C3E0;
`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const StyledErrorDiv = styled.div`

`