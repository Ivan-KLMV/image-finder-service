import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { getImagesApi } from '../../services/getResponse';
import {
  ImageGalleryItem,
  LoadMoreButton,
  Modal,
  FooterMessage,
  ErrorMessage,
} from '../index';

export const ImageGallery = ({ searchValue }) => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    setSearch(searchValue);
    setImages([]);
    setCurrentPage(1);
  }, [searchValue]);

  useEffect(() => {
    if (!search) {
      return;
    }

    setIsLoading(true);
    getImagesApi(search, currentPage)
      .then(data => {
        if (data.hits.length > 0) {
          setImages(images => [...images, ...data.hits]);
          setTotalHits(data.totalHits);
          setError(null);
          return;
        }
        return Promise.reject(
          new Error(
            'Sorry, there are no images matching your search query. Please try again.'
          )
        );
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [currentPage, search]);

  const loadMoreHandle = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const toggleModal = link => {
    setShowModal(showModal => !showModal);
    setLargeImageURL(link);
  };

  const loadMoreButtonCondition =
    images.length > 0 && totalHits !== images.length;
  const footerMessageCondition =
    images.length > 0 && totalHits === images.length;

  return (
    <>
      <ImageGalleryStyled>
        {images.length > 0 && (
          <ImageGalleryItem images={images} onClick={toggleModal} />
        )}
      </ImageGalleryStyled>

      {error && <ErrorMessage>{error.message}</ErrorMessage>}

      {isLoading && (
        <ThreeDots
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ margin: ' 0 auto' }}
        />
      )}

      {loadMoreButtonCondition && (
        <LoadMoreButton loadMoreHandle={loadMoreHandle} />
      )}
      {footerMessageCondition && (
        <FooterMessage>
          We're sorry, but you've reached the end of search results.
        </FooterMessage>
      )}
      {showModal && (
        <Modal onClickProp={toggleModal}>
          <img src={largeImageURL} alt="big view" />
        </Modal>
      )}
    </>
  );
};
