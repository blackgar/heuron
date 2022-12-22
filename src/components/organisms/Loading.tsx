import Spinner from '@atoms/Spinner';
import { LoadingTitle, LoadingWrapper } from '@styles/Loading';

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner />
      <LoadingTitle>Loading...</LoadingTitle>
    </LoadingWrapper>
  );
};

export default Loading;
