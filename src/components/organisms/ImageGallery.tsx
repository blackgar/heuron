import { useRecoilValue } from 'recoil';
import { imageListAtom } from '@atom';
import { Gallery } from 'react-grid-gallery';
import { Container } from '@styles/list';
import { useNavigate } from 'react-router-dom';

const ImageGallery = () => {
  const navigate = useNavigate();
  const imageList = useRecoilValue(imageListAtom);
  const handleClick = (idx: number) => {
    navigate(`/${idx}`);
  };

  return (
    <Container>
      <Gallery images={imageList} enableImageSelection={false} onClick={handleClick} />
    </Container>
  );
};

export default ImageGallery;
