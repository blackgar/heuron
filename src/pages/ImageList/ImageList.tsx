import ListTemplate from '@template/ListTemplate';
import useMutation from '@hooks/useMutation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { imageListAtom } from '@atom';
import { Container } from '@styles/list/style';

function ImageList() {
  const [getList, { data, loading }] = useMutation();
  const [imageList, setImageList] = useRecoilState(imageListAtom);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
      setImageList(data);
    }
  }, [data]);
  console.log(imageList);

  return <>{loading ? <Container>Loading...</Container> : <ListTemplate />}</>;
}

export default ImageList;
