import { HeaderWrapper, Image } from '@styles/header';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Image src={process.env.PUBLIC_URL + `/휴런로고.jpg`} alt="" />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
