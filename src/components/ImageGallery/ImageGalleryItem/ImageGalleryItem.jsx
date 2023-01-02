import { GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  return (
    <GalleryItem>
      <img src={image.webformatURL} alt="" />
    </GalleryItem>
  );
};
