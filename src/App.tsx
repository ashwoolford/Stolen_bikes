import React from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import InfoCard from './components/InfoCard/InfoCard';
import Pagination from './components/Pagination/Pagination';

import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <SearchForm />
      <InfoCard
        title="This is a Title"
        description="Test description"
        theftDate="2022-05-25"
        location="Munich, 81669, DE"
      />

      <InfoCard
        title="This is a Title"
        description="Test description"
        theftDate="2022-05-25"
        location="Munich, 81669, DE"
      />
      <Pagination />
      <Footer />
    </Container>
  );
}

export default App;
