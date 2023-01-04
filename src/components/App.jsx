import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';

import { AppStyled } from './App.styled';
import { Loader } from './Loader';
import { ButtonLoadMore } from './Button';
import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Modal } from './Modal';
import { number } from 'prop-types';

export class App extends Component {
  state = {
    page: 1,
    search: '',
    status: '',
    imagesList: null,
    showModal: false,
    largeImage: null,
    totalhits: 0,
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  changeStatus = value => {
    this.setState({ status: value });
  };

  handleFormSubmit = search => {
    this.setState({ page: 1, search, imagesList: null });
  };

  recordingImagesList = data => {
    if (!this.state.imagesList) {
      this.setState({ imagesList: data });
      return;
    }
    if (this.state.imagesList) {
      this.setState(prevState => ({
        imagesList: [...prevState.imagesList, ...data],
      }));
      return;
    }
  };

  writeLargeImage = largeImage => {
    this.setState({ largeImage });
  };

  writeTotalHits = totalhits => {
    this.setState({ totalhits });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const {
      page,
      search,
      status,
      imagesList,
      showModal,
      largeImage,
      totalhits,
    } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          page={page}
          searchImages={search}
          onStatusChange={this.changeStatus}
          onRecordingImagesList={this.recordingImagesList}
          onWriteTotalHits={this.writeTotalHits}
        >
          {imagesList?.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image.webformatURL}
              onToggle={this.toggleModal}
              writeLargeImage={this.writeLargeImage}
              bigImg={image.largeImageURL}
            ></ImageGalleryItem>
          ))}
        </ImageGallery>
        {status === 'loading' && <Loader />}
        <ToastContainer autoClose={2000} />
        {showModal && (
          <Modal largeImg={largeImage} onToggle={this.toggleModal} />
        )}
        {imagesList && status !== 'loading' && totalhits > 12 && (
          <ButtonLoadMore loadMore={this.loadMore} />
        )}
      </AppStyled>
    );
  }
}
