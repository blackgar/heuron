import styled from 'styled-components';

export const CanvasImg = styled.canvas`
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalCanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  top: 50%;
  left: 50%;
  opacity: 1;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-color: black;
`;

export const ModalBtn = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 3rem;
  margin-right: 4rem;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`;
