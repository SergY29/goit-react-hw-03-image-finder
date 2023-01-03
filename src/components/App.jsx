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

export class App extends Component {
  state = {
    page: 1,
    search: '',
    status: '',
    imagesList: null,
    showModal: false,
    largeImage: null,
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

  // recordingImagesList = () => {
  //   this.setState({
  //     imagesList: [...this.state.imagesList, ...this.state.firstList],
  //   });
  // };

  recordingImagesList = data => {
    // console.log(this.state.imagesList);
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { page, search, status, imagesList, showModal, largeImage } =
      this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          page={page}
          searchImages={search}
          onStatusChange={this.changeStatus}
          onRecordingImagesList={this.recordingImagesList}
          recordingFirstList={this.recordingFirstList}
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
        {imagesList && <ButtonLoadMore loadMore={this.loadMore} />}
      </AppStyled>
    );
  }
}
