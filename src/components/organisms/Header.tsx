import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Image src={process.env.PUBLIC_URL + `/휴런로고.jpg`} alt="" />
      </Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  border-bottom: 2px solid #dfe0e2;
  background-color: white;
  padding: 1rem 2rem;
`;

const Image = styled.img`
  height: 5rem;
  width: auto;
`;

export default Header;
