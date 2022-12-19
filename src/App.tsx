import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageList from '@pages/ImageList/ImageList';
import Header from '@organisms/Header';
import Footer from '@organisms/Footer';
import { Container } from '@styles/list/style';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<ImageList />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
