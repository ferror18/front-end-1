import styled from 'styled-components'


export const StyledButton = styled.button`
    width: 20%;
    background-color: #028AF2;
    font-size: 1rem;
    margin: 5% 0 0 0;

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
    background-color: #E6F4F1;
`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background:  #028AF2;
    height: 4rem;
`

export const StyledErrorDiv = styled.div`
    color: crimson;
`

export const StyledInnerForm = styled.div`
    padding: 0 3% 0 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.25rem;
`

export const StyledLoginErr = styled.div`
     border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    color: crimson;
    background-color: aliceblue;
    margin: 5%;
    padding: 5%;
`

export const StyledDiv = styled.div`
    display: flex;
    color: white;
    align-items: center;
    width: 30%;
`

export const StyledImgDiv = styled.div`
    display: flex;
    justify-content: space-between;
`