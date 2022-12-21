import Canvas from '@atoms/Canvas';
import Title from '@atoms/Title';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';
interface DataProps {
  src: string;
  author: string;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ src, author, openModal, setOpenModal }: DataProps) => {
  const outside = useRef<any>(null);

  const handleOutside = (e: MouseEvent) => {
    if (!outside.current.contains(e.target)) toggleSide();
  };

  const toggleSide = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  });
  return (
    <ModalContainer>
      <Title title={author} />
      <Btn onClick={() => setOpenModal(!openModal)}>X</Btn>
      <CanvasWrapper ref={outside}>
        <Canvas src={src} />
      </CanvasWrapper>
      <Backdrop />
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* opacity: 0.7; */
  z-index: 5;
`;

const CanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  top: 50%;
  left: 50%;
  z-index: 20;
  opacity: 1;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;
  z-index: 3;
  opacity: 0.8;
  background-color: black;
`;

const Btn = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 3rem;
  margin-right: 4rem;
  z-index: 4;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default Modal;
