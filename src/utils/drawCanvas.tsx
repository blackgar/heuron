import { MAX_IMAGE_HEIGHT, MAX_IMAGE_WIDTH } from '@constants/constant';

export const drawCanvas = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  src: string,
  rotationAngle: number
) => {
  const canvas = canvasRef.current;
  const context = canvas?.getContext('2d');
  const image = new Image();
  image.src = src;

  const width =
    image.width > image.height ? MAX_IMAGE_WIDTH : (image.width * MAX_IMAGE_HEIGHT) / image.height;
  const height =
    image.width > image.height ? (image.height * MAX_IMAGE_WIDTH) / image.width : MAX_IMAGE_HEIGHT;

  image.onload = () => {
    context?.clearRect(0, 0, canvas!.width, canvas!.height);
    context?.save();
    context?.translate(canvas!.width / 2, canvas!.height / 2);
    context?.rotate((Math.PI / 180) * rotationAngle);
    context?.translate(-(canvas!.width / 2), -(canvas!.height / 2));
    context?.drawImage(
      image,
      canvas!.width / 2 - width / 2,
      canvas!.height / 2 - height / 2,
      width,
      height
    );
    context?.restore();
  };
};
