import { useRecoilValue } from 'recoil';
import { imageListAtom } from '@atom';
import { Gallery, Image } from 'react-grid-gallery';
import { useState } from 'react';
import Modal from '@organisms/Modal';
import { Container } from '@styles/list/style';

const ImageGallery = () => {
  const [index, setIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const imageList = useRecoilValue(imageListAtom);
  const handleClick = (idx: number) => {
    setOpenModal(true);
    setIndex(idx);
  };
  console.log(openModal);
  console.log(index);
  return (
    <Container>
      {openModal && (
        <Modal
          src={imageList[index].src}
          author={imageList[index].author}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <Gallery images={imageList} enableImageSelection={false} onClick={handleClick} />
      {/* <img src={process.env.PUBLIC_URL + '/휴런로고.jpg'} alt="" onClick={handleClick} /> */}
    </Container>
  );
};

export default ImageGallery;
