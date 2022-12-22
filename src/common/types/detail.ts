import { Dispatch, SetStateAction } from 'react';

export interface DetailType {}

export interface CanvasProps {
  src: string;
  zoom: number;
  rotationAngle: number;
}

export interface ModalProps {
  len: number;
  src: string;
  author: string;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}
