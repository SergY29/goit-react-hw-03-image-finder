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
    // status: this.props.statusSearch,
    imagesList: null,
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.searchImages !== this.props.searchImages) {
      this.props.onStatusChange(STATUS.loading);
      try {
        const { data } = await axios.get(
          `https://pixabay.com/api/?q=${this.props.searchImages}&page=1&key=31232052-ebca7977e423ff0aad3113109&image_type=photo&orientation=horizontal&per_page=12`
        );
        const arrayImages = data.hits;
        this.setState({ imagesList: arrayImages });
        console.log(arrayImages);
      } catch (error) {
        toast.error('Opps! Something went wrong');
        console.log(error);
      } finally {
        this.props.onStatusChange(STATUS.idle);
      }
    }
  }

  render() {
    return (
      <Gallery>
        <ImageGalleryItem />
      </Gallery>
    );
  }
}
