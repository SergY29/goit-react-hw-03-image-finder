import { GalleryItem } from './ImageGalleryItem.styled';
import { Modal } from '../../Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { image, largeImage } = this.props;
    return (
      <GalleryItem onClick={this.toggleModal}>
        <img src={image} alt="" />
        {this.state.showModal && <Modal largeImg={largeImage} />}
      </GalleryItem>
    );
  }
}
