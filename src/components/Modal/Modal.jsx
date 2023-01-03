import { Component } from 'react';
import { Overlay, Modalwindow } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  handleKeyDowm = e => {
    if (e.code === 'Escape') {
      this.props.onToggle();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDowm);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDowm);
  }

  handleClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onToggle();
    }
  };

  render() {
    const { largeImg } = this.props;
    return createPortal(
      <Overlay onClick={this.handleClose}>
        <Modalwindow>
          <img src={largeImg} alt="" />
        </Modalwindow>
      </Overlay>,
      modalRoot
    );
  }
}
