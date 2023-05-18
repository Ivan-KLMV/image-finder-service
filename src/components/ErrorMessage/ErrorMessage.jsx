import PropTypes from 'prop-types';
import { ErrorMessageStyled } from './ErrorMessage.styled';

export const ErrorMessage = ({ children }) => {
  return (
    <ErrorMessageStyled>
      <h1>{children}</h1>
    </ErrorMessageStyled>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
