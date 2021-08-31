import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, largeImageURL }) => {
  const handleEscape = e => e.code === 'Escape' && closeModal();

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEscape);
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onOverlayClick = ({ target, currentTarget }) => {
    target === currentTarget && closeModal();
  };

  return (
    <div onClick={onOverlayClick} className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func,
  largeImageURL: PropTypes.string,
};
