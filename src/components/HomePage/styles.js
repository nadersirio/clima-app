import styled, { keyframes } from 'styled-components';

export const ContentBox = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/default.jpg');
`;

export const ClimaCard = styled.div`
  min-height: ${props =>
    props.$weather ? '70vh' : '50vh'};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(183, 207, 228);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 1;
  background-image: ${props =>
    props.$weather ? `url("/images/${props.$weather}.jpg")` : ''};
`;

export const StackStyle = styled.div`
  margin-left: 10px;
`;

export const TextCard = styled.div`
  min-height: 400px;
  max-width: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const PChildrenTextCard = styled.p`
  font-size: 20px;
  margin: 5px 0 0 0;
  border-bottom: solid 2px royalblue;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
