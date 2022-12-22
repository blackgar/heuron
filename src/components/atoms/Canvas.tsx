import { CANVAS_HEIGHT, CANVAS_WIDTH } from '@constants/constant';
import { useEffect, useRef } from 'react';
import { CanvasImg } from '@styles/detail';
import { CanvasProps } from '@/types/detail';
import { drawCanvas } from '@utils/drawCanvas';

const Canvas = ({ src, zoom, rotationAngle }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    drawCanvas(canvasRef, src, rotationAngle);
  }, [src, rotationAngle, zoom]);

  return (
    <CanvasImg
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      style={{ transform: `scale(${zoom < 0 ? 0.1 : zoom > 3 ? 3 : zoom})` }}
    />
  );
};

export default Canvas;
