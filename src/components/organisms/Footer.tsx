import styled from 'styled-components';

const Footer = () => {
  return <FooterWrapper>Copyright © Heuron Co., Ltd.</FooterWrapper>;
};

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #232323;
  color: #888888;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  padding: 2.5rem;
`;

export default Footer;
