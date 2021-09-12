import styled from 'styled-components'

export const HeadPanelStyled = styled.div`
        position: fixed;
        z-index: -1;
        height: 100vh;
        width: 100vw;
        background: #292b2c;
        left: 0;
        top: -100vh;
        transition: all 1s ease-out;
        transform: ${({ isOpen }) => isOpen ? 'translatey(100vh)' : 'translatey(-100vh)'};
        padding-top: 75px;
        button {
            width: 100%;
        }
`

export const OpacityHover = styled.div`
    transition: opacity .2s linear;
    &:hover {
        opacity: 0.7;
    }
`
