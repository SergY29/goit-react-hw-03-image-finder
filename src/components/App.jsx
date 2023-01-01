import { AppStyled } from './App.styled';
import { Searchbar } from './Searchbar';

export const App = () => {
  return (
    <AppStyled>
      <Searchbar />
    </AppStyled>
  );
};

// /*
//  * Стили компонента ImageGallery
//  */
/

// /*
//  * Стили компонента ImageGalleryItem
//  */
// .ImageGalleryItem {
//   border-radius: 2px;
//   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
//     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
// }

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

// /*
//  * Стили компонента Modal
//  */

// /*
// * Стили компонента Buton (Load more)
// */
// .Button {
//   padding: 8px 16px;
//   border-radius: 2px;
//   background-color: #3f51b5;
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   text-align: center;
//   display: inline-block;
//   color: #fff;
//   border: 0;
//   text-decoration: none;
//   cursor: pointer;
//   font-family: inherit;
//   font-size: 18px;
//   line-height: 24px;
//   font-style: normal;
//   font-weight: 500;
//   min-width: 180px;
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
// }
