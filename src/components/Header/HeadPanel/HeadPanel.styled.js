import styled from 'styled-components'

export const HeadPanelStyled = styled.div`
        height: 100vh;
        width: 100%;
        background: #292b2c;
        position: fixed;
        left: 0;
        top: -100vh;
        ${'' /* top: 50px; */}
        display: flex;
        transition: all 0.5s ease-out;
        z-index: 3;
        color: white;
        transform: ${({ isOpen }) => isOpen ? 'translatey(100vh)' : 'translatey(-100vh)'};
        padding-top: 75px;

        button {
            width: 100%;
        }
`

export const OpacityHover = styled.div`

    transition: all .2s linear;
    &:hover {
        opacity: 0.7;
    }


    h2 {
        position: relative;
        top: 5px;
        left: 5px;
    }
`

export const HeaderStyled = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 20;

`
