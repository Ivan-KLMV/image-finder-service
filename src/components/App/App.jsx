import { useState } from 'react';
import { ImageGallery, Searchbar } from '../index';
import { AppStyled } from './App.styled';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const seachQeryHandle = qery => {
    setSearchValue(qery);
  };

  return (
    <AppStyled>
      <Searchbar onSubmitProp={seachQeryHandle} />
      <ImageGallery searchValue={searchValue} />
    </AppStyled>
  );
};
