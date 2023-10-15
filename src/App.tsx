import React from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import InfoCard from './components/InfoCard/InfoCard';
import Pagination from './components/Pagination/Pagination';
import TheftInfo from './components/TheftInfo/TheftInfo';
import MapView from './components/MapView/MapView';

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
      <TheftInfo
        title="2019 Infinity Cycle Works"
        description="It’s a 24 inch bike, it has two different grips, a flashlight in the front and the back."
        theftDate="Yesterday 10:39pm"
        location="Munich"
        year={2020}
      />
      <MapView coordinates={[51.505, -0.09]}/>
      <Footer />
    </Container>
  );
}

export default App;
