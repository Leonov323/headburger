import styled from 'styled-components'

export const Ghost = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    flex-direction: column
  section {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
}

h2 {
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    padding: 5px;
}

h2 span {
    transition: 1.5s;
    margin: 0 auto;
}
.ghost:hover span {
    filter: blur(20px);
    opacity: 0;
    transform: scale(2);
}

h2 span:nth-child(10n+1) {
    transition-delay: 0s;
}
h2 span:nth-child(10n+2) {
    transition-delay: 0s;
}
h2 span:nth-child(10n+3) {
    transition-delay: 0.2s;
}
h2 span:nth-child(10n+4) {
    transition-delay: 0.3s;
}
h2 span:nth-child(10n+5) {
    transition-delay: 0.4s;
}
h2 span:nth-child(10n+6) {
    transition-delay: 0.5s;
}
h2 span:nth-child(10n+7) {
    transition-delay: 0.6s;
}
h2 span:nth-child(10n+8) {
    transition-delay: 0.7s;
}
h2 span:nth-child(10n+9) {
    transition-delay: 0.8s;
}
h2 span:nth-child(10n+10) {
    transition-delay: 0.9s;
}

`