import styled, { keyframes } from 'styled-components';

export const StyledMain = styled.div`
padding-top: 10px;
min-height: 100vh;
width: 100%;
background: gray;
display: block;
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
display: inline-block;
animation: ${rotate} 2s linear infinite;
padding: 2rem 1rem;
font-size: 1.2rem;
`;

