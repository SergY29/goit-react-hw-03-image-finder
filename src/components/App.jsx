import { AppStyled } from './App.styled';
import { Loader } from './Loader/Loader';
// import { ButtonLoadMore } from './Button';
// import { ImageGallery } from './ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

import { Searchbar } from './Searchbar';

export const App = () => {
  return (
    <AppStyled>
      <Searchbar />
      <Loader />
    </AppStyled>
  );
};
