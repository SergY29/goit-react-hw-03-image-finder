import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';

import { AppStyled } from './App.styled';
import { Loader } from './Loader';
// import { ButtonLoadMore } from './Button';
import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    search: '',
    status: '',
    imagesList: null,
    showModal: false,
    largeImage: '',
  };

  changeStatus = value => {
    this.setState({ status: value });
  };

  handleFormSubmit = search => {
    this.setState({ search });
  };

  recordingImagesList = imagesList => {
    this.setState({ imagesList });
  };

  writeLargeImage = largeImage => {
    this.setState({ largeImage });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { search, status, imagesList, showModal, largeImage } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchImages={search}
          onStatusChange={this.changeStatus}
          onRecordingImagesList={this.recordingImagesList}
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
        {showModal && <Modal largeImg={largeImage} />}
        <ToastContainer autoClose={2000} />
      </AppStyled>
    );
  }
}
