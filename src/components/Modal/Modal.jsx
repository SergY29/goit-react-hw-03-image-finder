import { Overlay, Modalwindow } from './Modal.styled';

export const Modal = ({ largeImg }) => {
  // console.log(largeImg);
  return (
    <Overlay>
      <Modalwindow>
        <img src={largeImg} alt="" />
      </Modalwindow>
    </Overlay>
  );
};
