import { MAX_CANVAS_HEIGHT, MAX_CANVAS_WIDTH } from '@constants/constant';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface DataProps {
  src: string;
}

const Canvas = ({ src }: DataProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const image = new Image();
    image.src = src;
    image.onload = () => {
      // context?.drawImage(image, 0, 0, 500, 500);
      const width =
        image.width > image.height
          ? MAX_CANVAS_WIDTH
          : (image.width * MAX_CANVAS_HEIGHT) / image.height;
      const height =
        image.width > image.height
          ? (image.height * MAX_CANVAS_WIDTH) / image.width
          : MAX_CANVAS_HEIGHT;
      context?.drawImage(
        image,
        MAX_CANVAS_WIDTH / 2 - width / 2,
        MAX_CANVAS_HEIGHT / 2 - height / 2,
        MAX_CANVAS_WIDTH / 2 + width / 2,
        MAX_CANVAS_HEIGHT / 2 + height / 2
      );
      // 중앙으로부터 같은 위아래, 같은 왼오여야 한다.
    };
  });

  return <CanvasImg ref={canvasRef} width={MAX_CANVAS_WIDTH} height={MAX_CANVAS_HEIGHT} />;
};

const CanvasImg = styled.canvas`
  width: 100%;
  height: 100%;
`;

export default Canvas;
