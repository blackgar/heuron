import Canvas from '@atoms/Canvas';
import { useEffect, useState } from 'react';
import { ModalContainer, ModalCanvasWrapper } from '@styles/detail';
import { useRecoilValue } from 'recoil';
import { imageListAtom } from '@atom';
import { useNavigate, useParams } from 'react-router-dom';
import useDebounce from '@utils/debounce';

const CanvasContent = () => {
  let firstX = -1;
  const zoomSpeed = 0.1;
  const navigate = useNavigate();
  const { id } = useParams();
  const imageList = useRecoilValue(imageListAtom);
  const [zoom, setZoom] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(0);

  const changeCanvas = (e: WheelEvent) => {
    setZoom(1);
    setRotationAngle(0);
    if (e.deltaY > 0) {
      navigate(`/${(Number(id) + 1) % imageList.length}`);
    } else {
      navigate(`/${(Number(id) + imageList.length - 1) % imageList.length}`);
    }
  };
  const zoomCanvas = (e: MouseEvent) => {
    const sumX = e.clientX - firstX;
    sumX > 0
      ? setZoom(zoom < 0 ? 0.1 : zoom > 3 ? 3 : zoom + (sumX / 50) * zoomSpeed)
      : setZoom(zoom < 0 ? 0.1 : zoom > 3 ? 3 : zoom + (sumX / 50) * zoomSpeed);
  };
  const rotateCanvas = (e: MouseEvent) => {
    const sumX = e.clientX - firstX;
    sumX > 0
      ? setRotationAngle(rotationAngle + (sumX / 10) * 1)
      : setRotationAngle(rotationAngle + (sumX / 10) * 1);
  };

  const startCommand = (e: MouseEvent) => {
    firstX = e.clientX;
    if (e.buttons === 1) document.addEventListener('mousemove', zoomCanvas);
    else if (e.buttons === 2) document.addEventListener('mousemove', rotateCanvas);
  };
  const quitCommand = () => {
    document.removeEventListener('mousemove', zoomCanvas);
    document.removeEventListener('mousemove', rotateCanvas);
  };
  const debounceChangeCanvas = useDebounce(changeCanvas, 1000);

  useEffect(() => {
    document.addEventListener('contextmenu', (e: MouseEvent) => {
      e.preventDefault();
    });
    document.addEventListener('wheel', debounceChangeCanvas);
    document.addEventListener('mousedown', startCommand);
    document.addEventListener('mouseup', quitCommand);
  });

  return (
    <ModalContainer>
      <ModalCanvasWrapper>
        <Canvas src={imageList[Number(id)].src} zoom={zoom} rotationAngle={rotationAngle} />
      </ModalCanvasWrapper>
    </ModalContainer>
  );
};

export default CanvasContent;
