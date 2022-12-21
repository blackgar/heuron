import Canvas from '@atoms/Canvas';
import Title from '@atoms/Title';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
interface DataProps {
  len: number;
  src: string;
  author: string;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ len, src, author, index, setIndex, openModal, setOpenModal }: DataProps) => {
  const zoomSpeed = 0.1;

  let firstX = -1;
  const [zoom, setZoom] = useState(1);
  // const [firstX, setFirstX] = useState(-1);
  // const [firstY, setFirstY] = useState(-1);
  const outside = useRef<any>(null);

  const handleOutside = (e: MouseEvent) => {
    if (!outside.current.contains(e.target)) toggleSide();
    // setFirstX(e.clientX);
    // setFirstY(e.clientY);
    console.log(e.clientX, e.clientY);
    firstX = e.clientX;
  };

  const toggleSide = () => {
    setOpenModal(false);
  };
  const zoomCanvas = (e: MouseEvent) => {
    const sumX = e.clientX - firstX;
    console.log(e.clientX, e.clientY);
    console.log(sumX);
    // sumX + sumY > 0
    //   ? (zoom += ((sumX + sumY) % 50) * zoomSpeed)
    //   : (zoom -= ((sumX + sumY) % 50) * zoomSpeed);
    sumX > 0 ? setZoom(zoom + (sumX / 50) * zoomSpeed) : setZoom(zoom + (sumX / 50) * zoomSpeed);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  });
  useEffect(() => {
    document.addEventListener('wheel', (e: any) => {
      if (e.deltaY > 0) {
        setIndex((index + 1) % len);
      } else {
        setIndex((index + len - 1) % len);
      }
    });
  });
  useEffect(() => {
    document.addEventListener('mousedown', () => {
      document.addEventListener('mousemove', zoomCanvas);
    });
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', zoomCanvas);
    });
  });

  return (
    <ModalContainer>
      <Title title={author} />
      <Btn onClick={() => setOpenModal(!openModal)}>X</Btn>
      <CanvasWrapper ref={outside}>
        <Canvas src={src} zoom={zoom} />
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
