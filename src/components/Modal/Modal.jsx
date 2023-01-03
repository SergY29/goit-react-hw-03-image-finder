import { Overlay, Modalwindow } from './Modal.styled';

export const Modal = ({ largeImg }) => {
  return (
    <Overlay>
      <Modalwindow>
        <img src={largeImg} />
      </Modalwindow>
    </Overlay>
  );
};
