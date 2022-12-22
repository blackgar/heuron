import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ImageList from '@pages/ImageList/ImageList';
import Header from '@organisms/Header';
import Footer from '@organisms/Footer';
import { Container } from '@styles/list';
import ImageDetail from '@pages/ImageDetail/ImageDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<ImageList />} />
          <Route path="/:id" element={<ImageDetail />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
