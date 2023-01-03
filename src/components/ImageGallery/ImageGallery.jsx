import { Component } from 'react';
import { toast } from 'react-toastify';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

import axios from 'axios';

const STATUS = {
  idle: 'idle',
  loading: 'loading',
  succes: 'succes',
  error: 'error',
};

export class ImageGallery extends Component {
  state = {
    imagesList: null,
  };

  async componentDidUpdate(prevProps) {
    const nextRequest = this.props.searchImages;
    const prevRequest = prevProps.searchImages;
    const { onStatusChange } = this.props;

    if (prevRequest !== nextRequest) {
      onStatusChange(STATUS.loading);
      try {
        const { data } = await axios.get(
          `https://pixabay.com/api/?q=${nextRequest}&page=1&key=31232052-ebca7977e423ff0aad3113109&image_type=photo&orientation=horizontal&per_page=12`
        );
        if (data.hits.length === 0) {
          toast.warn(`Sorry! We didn't find anything, change your request`);
          return;
        }
        this.setState({ imagesList: data });
        this.props.onRecordingImagesList(data.hits);
        toast.success(`Hooray! We found ${data.totalHits} images.`);
      } catch (error) {
        toast.error('Opps! Something went wrong');
      } finally {
        onStatusChange(STATUS.idle);
      }
    }
  }

  render() {
    const { imagesList } = this.state;
    return (
      <>
        {imagesList && (
          <Gallery>
            {imagesList.hits.map(image => (
              <ImageGalleryItem
                key={image.id}
                image={image.webformatURL}
                largeImage={image.largeImageURL}
              />
            ))}
          </Gallery>
        )}
      </>
    );
  }
}
