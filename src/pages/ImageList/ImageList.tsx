import ListTemplate from '@template/ListTemplate';
import useMutation from '@hooks/useMutation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { imageListAtom } from '@atom';
import Loading from '@organisms/Loading';
import { Container } from '@styles/list';

function ImageList() {
  const [getList, { data, loading }] = useMutation();
  const [, setImageList] = useRecoilState(imageListAtom);

  useEffect(() => {
    getList();
  });

  useEffect(() => {
    if (data) {
      setImageList(data);
    }
  });

  return <Container>{loading ? <Loading /> : <ListTemplate />}</Container>;
}

export default ImageList;
