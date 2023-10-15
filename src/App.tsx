import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Index from './pages/Index';
import Details from './pages/Details';

import { GlobalStyle } from './globalStyles';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Container>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
          {/* <Footer /> */}
        </Container>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
