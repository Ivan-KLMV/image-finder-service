import PropTypes from 'prop-types';
import { FooterMessageStyled } from './FooterMessage.styled';

export const FooterMessage = ({ children }) => {
  return (
    <>
      <div style={{ height: '48px' }}></div>
      <FooterMessageStyled className="FooterMessage">
        <p>{children}</p>
      </FooterMessageStyled>
    </>
  );
};

FooterMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
