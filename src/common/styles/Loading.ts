import styled, { keyframes } from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingTitle = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerStyle = styled.div`
  border: 4px solid ${props => props.theme.subBoxColor};
  border-top: 4px solid ${props => props.theme.ownColor};
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  animation: ${spin} 1s linear infinite;
`;
