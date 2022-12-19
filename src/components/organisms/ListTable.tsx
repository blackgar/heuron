import { useRecoilValue } from 'recoil';
import { imageListAtom } from '@atom';
import { Gallery } from 'react-grid-gallery';
const ListTable = () => {
  const imageList = useRecoilValue(imageListAtom);
  return <Gallery images={imageList} enableImageSelection={false} />;
};

export default ListTable;
