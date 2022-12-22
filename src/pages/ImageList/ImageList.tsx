import ListTemplate from '@template/ListTemplate';
import useMutation from '@hooks/useMutation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { imageListAtom } from '@atom';
import Loading from '@organisms/Loading';
import { Container } from '@styles/list';

function ImageList() {
  const [getList, { data, loading }] = useMutation();
  const [imageList, setImageList] = useRecoilState(imageListAtom);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (data) {
      setImageList(data);
    }
  }, [data]);

  return <Container>{loading ? <Loading /> : <ListTemplate />}</Container>;
}

export default ImageList;
