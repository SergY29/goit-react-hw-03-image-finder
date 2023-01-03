import { Overlay, Modalwindow } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImg }) => {
  // console.log(largeImg);
  return createPortal(
    <Overlay>
      <Modalwindow>
        <img src={largeImg} alt="" />
      </Modalwindow>
    </Overlay>,
    modalRoot
  );
};
