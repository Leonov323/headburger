import styled, { keyframes } from 'styled-components';

export const PrimaryStyled = styled.div`
min-height: 100vh;
width: 100%;
background: gray;

.deletemedia { 
@media only screen and (max-width: 576px) {
       display: none;
     }
  }
}
`

export const rotate = keyframes`
from {
transform: rotate(0deg);
}

to {
transform: rotate(360deg);
}
`;

export const Rotate = styled.div`
padding: 10%;
animation: ${rotate} 2s linear infinite;
`;

