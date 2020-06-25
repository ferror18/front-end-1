import styled from 'styled-components'

export const Drawer = styled.div`
    position: absolute;
    height: 100%;
    background: #CBF6FF;
    width: 30%;
    left:${props => props.left}%;
`

export const StyledLink = styled.div`
    cursor: pointer;
    padding: 5%;
    margin: 15% 0;
    color: white;
`