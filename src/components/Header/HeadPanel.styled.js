import styled from 'styled-components'

export const HeadPanelStyled = styled.div`
        position: fixed;
        z-index: -1;
        height: 100vh;
        width: 100vw;
        background: #292b2c;
        left: 0;
        top: 0;
        transition: all .3s ease-out;
        transform: ${({ isOpen }) => isOpen ? 'translatey(0vh)' : 'translatey(-100vh)'};
        padding-top: 75px;
        a {
            width: 100%;
        }
`

export const OpacityHover = styled.div`
    transition: opacity .2s linear;
    &:hover {
        opacity: 0.7;
    }
    a {
        text-decoration: none;
    }
`

export const HeaderSpace = styled.div`
    height: 48px;
    width: 100%;
    background: #292b2c;;
`
