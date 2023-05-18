import PropTypes from 'prop-types';
import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(image => (
    <ImageGalleryItemStyled key={image.id}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onClick(image.largeImageURL)}
      />
    </ImageGalleryItemStyled>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};
