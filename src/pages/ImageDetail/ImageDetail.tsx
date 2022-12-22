import { imageListAtom } from '@atom';
import useMutation from '@hooks/useMutation';
import Loading from '@organisms/Loading';
import { Container } from '@styles/list';
import DetailTemplate from '@template/DetailTemplate';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

function ImageDetail() {
  const [getList, { data, loading }] = useMutation();
  const [, setImageList] = useRecoilState(imageListAtom);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (data) {
      setImageList(data);
    }
  }, [data]);
  return <Container>{loading ? <Loading /> : <DetailTemplate />}</Container>;
}

export default ImageDetail;
