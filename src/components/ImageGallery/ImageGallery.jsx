import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import { getImages } from 'components/services/services';

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
    const prevPage = this.props.page;
    const nextPage = prevProps.page;
    const { onStatusChange } = this.props;

    if (prevRequest !== nextRequest || prevPage !== nextPage) {
      onStatusChange(STATUS.loading);
      try {
        const data = await getImages(nextRequest, prevPage);
        if (data.hits.length === 0) {
          toast.warn(`Sorry! We didn't find anything, change your request`);
          return;
        }
        onStatusChange(STATUS.succes);
        this.setState({ imagesList: data });
        this.props.onRecordingImagesList(data.hits);
        if (prevPage !== nextPage) {
          return;
        }
        toast.success(`Hooray! We found ${data.totalHits} images.`);
      } catch (error) {
        onStatusChange(STATUS.error);
        toast.error('Opps! Something went wrong');
      }
    }
  }

  render() {
    const { imagesList } = this.state;
    return <>{imagesList && <Gallery>{this.props.children}</Gallery>}</>;
  }
}

ImageGallery.propTypes = {
  onStatusChange: PropTypes.func.isRequired,
  onRecordingImagesList: PropTypes.func.isRequired,
  searchImages: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
