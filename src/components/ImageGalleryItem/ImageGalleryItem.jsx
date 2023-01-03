import { GalleryItem } from './ImageGalleryItem.styled';
// import { Modal } from '../Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  toggleModal = () => {
    this.props.writeLargeImage(this.props.big);
    this.props.onToggle();
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

// onClick={this.toggleModal}
