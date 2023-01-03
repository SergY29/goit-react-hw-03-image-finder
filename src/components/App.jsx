import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';

import { AppStyled } from './App.styled';
import { Loader } from './Loader';
// import { ButtonLoadMore } from './Button';
import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';

export class App extends Component {
  state = {
    search: '',
    status: '',
    imagesList: null,
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

  render() {
    const { search, status, imagesList } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchImages={search}
          onStatusChange={this.changeStatus}
          onRecordingImagesList={this.recordingImagesList}
        ></ImageGallery>
        {status === 'loading' && <Loader />}
        <ToastContainer autoClose={2000} />
      </AppStyled>
    );
  }
}

// {
//   imagesList.hits.map(image => (
//     <ImageGalleryItem
//       key={image.id}
//       image={image.webformatURL}
//       largeImage={image.largeImageURL}
//     />
//   ));
// }
