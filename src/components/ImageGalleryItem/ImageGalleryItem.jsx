import { GalleryItem } from './ImageGalleryItem.styled';
// import { Modal } from '../Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  toggleModal = () => {
    this.props.onToggle(this.props.showModal);
  };

  render() {
    const { image } = this.props;
    return (
      <GalleryItem onClick={this.toggleModal}>
        <img src={image} alt="" />
        {this.props.children}
      </GalleryItem>
    );
  }
}
