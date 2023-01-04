import PropTypes from 'prop-types';
import { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  toggleModal = () => {
    this.props.writeLargeImage(this.props.bigImg);
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

ImageGalleryItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  writeLargeImage: PropTypes.func.isRequired,
  bigImg: PropTypes.string.isRequired,
};
