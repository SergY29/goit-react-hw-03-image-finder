import { Component } from 'react';
import { toast } from 'react-toastify';
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
        this.setState({ imagesList: data });
        this.props.onRecordingImagesList(data.hits);
        if (prevPage !== nextPage) {
          return;
        }
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
    return <>{imagesList && <Gallery>{this.props.children}</Gallery>}</>;
  }
}
