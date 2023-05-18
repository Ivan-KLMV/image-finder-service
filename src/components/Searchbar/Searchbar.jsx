import { useState } from 'react';
import { SearchbarStyled } from './Searchbar.styled';

export const Searchbar = ({ onSubmitProp }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() === '') {
      alert('Enter a request');
      return;
    }

    onSubmitProp(input);
    setInput('');
  };

  return (
    <SearchbarStyled>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search_</span>
        </button>

        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={input}
        />
      </form>
    </SearchbarStyled>
  );
};
