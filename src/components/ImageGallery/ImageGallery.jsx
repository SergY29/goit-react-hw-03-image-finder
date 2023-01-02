import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import axios from 'axios';

const STATUS = {
  idle: 'idle',
  loading: 'loading',
};

export class ImageGallery extends Component {
  state = {
    // status: this.props.statusSearch,
    imagesList: null,
  };

  async componentDidUpdate(prevProps) {
    this.props.onStatusChange(STATUS.loading);
    if (prevProps.searchImages !== this.props.searchImages) {
      try {
        const data = axios.get(
          `https://pixabay.com/api/?q=${this.props.searchImages}&page=1&key=31232052-ebca7977e423ff0aad3113109&image_type=photo&orientation=horizontal&per_page=12`
        );
        console.log(data);
      } catch (error) {
        console.log(error);
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
