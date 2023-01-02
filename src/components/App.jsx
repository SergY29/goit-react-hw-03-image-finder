import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';

import { AppStyled } from './App.styled';
import { Loader } from './Loader';
// import { ButtonLoadMore } from './Button';
import { ImageGallery } from './ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar';

export class App extends Component {
  state = {
    search: '',
    status: '',
  };

  changeStatus = value => {
    this.setState({ status: value });
  };

  handleFormSubmit = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {true && (
          <ImageGallery
            searchImages={search}
            onStatusChange={this.changeStatus}
          />
        )}
        {false && <Loader />}
        <ToastContainer autoClose={2000} />
      </AppStyled>
    );
  }
}
