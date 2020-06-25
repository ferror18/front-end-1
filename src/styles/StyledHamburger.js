import styled from 'styled-components'

export const Drawer = styled.div`
    position: absolute;
    height: 90%;
    background: #CBF6FF;
    width: 30%;
    left:${props => props.left}%;
`

export const StyledLink = styled.div`
    cursor: pointer;
    padding: 3%;
    margin: 5%;
    color: white;
`