import { ErrorMessageStyled } from './ErrorMessage.styled';

export const ErrorMessage = ({ children }) => {
  return (
    <ErrorMessageStyled>
      <h1>{children}</h1>
    </ErrorMessageStyled>
  );
};
