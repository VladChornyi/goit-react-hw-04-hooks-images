import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { getImagesApi } from '../../utils/serviceAPI';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';

const ImageGallery = ({ query }) => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [largeImgURL, setLargeImgURL] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const getImages = (query, page = 1) => {
    setLoading(true);
    getImagesApi(query, page)
      .then(pictures => setImages(prevImages => [...prevImages, ...pictures]))
      .finally(() => {
        setLoading(false);
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      });
  };

  useEffect(() => {
    if (query) {
      getImages(query);
      setPage(1);
      setImages([]);
    }
  }, [query]);

  useEffect(() => {
    if (page !== 1) {
      getImages(query, page);
    }
  }, [page, query]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const toggleModal = () => {
    setIsOpenModal(prev => !prev);
  };
  const setLargeImg = largeImgURL => {
    setLargeImgURL(largeImgURL);
  };

  return (
    <>
      {images.length > 0 && (
        <ul className="ImageGallery">
          {images.map(image => (
            <li key={image.id} onClick={toggleModal} className="ImageGalleryItem">
              <img
                src={image.webformatURL}
                alt={image.tags}
                onClick={() => setLargeImg(image.largeImageURL)}
                className="ImageGalleryItem-image"
              />
            </li>
          ))}
        </ul>
      )}
      <div className="loader">
        {loading && (
          <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} timeout={3000} />
        )}
      </div>

      {isOpenModal && <Modal largeImageURL={largeImgURL} closeModal={toggleModal} />}
      {images.length > 1 && (
        <button className="Button" type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string,
};
