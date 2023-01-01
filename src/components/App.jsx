import { AppStyled } from './App.styled';
import { ButtonLoadMore } from './Button';
import { Searchbar } from './Searchbar';

export const App = () => {
  return (
    <AppStyled>
      <Searchbar />
      <ButtonLoadMore />
    </AppStyled>
  );
};

// /*
//  * Стили компонента ImageGalleryItem
//  */

// .ImageGalleryItem-image {
//   width: 100%;
//   height: 260px;
//   object-fit: cover;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }

// .ImageGalleryItem-image:hover {
//   transform: scale(1.03);
//   cursor: zoom-in;
// }
