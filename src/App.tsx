import React from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <SearchForm />
      <Footer />
    </Container>
  );
}

export default App;
