import styled from 'styled-components';

interface PropsType {
  title: string;
}
const Title = ({ title }: PropsType) => {
  return <Container>{title}</Container>;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  text-align: center;
  margin-top: 4rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  z-index: 6;
`;

export default Title;
