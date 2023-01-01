import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';

import { AppStyled } from './App.styled';
import { Loader } from './Loader/Loader';
// import { ButtonLoadMore } from './Button';
// import { ImageGallery } from './ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

import { Searchbar } from './Searchbar';

export class App extends Component {
  state = {
    search: '',
  };

  handleFormSubmit = search => {
    this.setState({ search });
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Loader />
        <ToastContainer autoClose={2000} />
      </AppStyled>
    );
  }
}
