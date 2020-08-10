import React from 'react';
import { useDispatch } from 'react-redux';
import { TextInput } from 'grommet';
import styled from 'styled-components';

import { filterDataForFeed } from '../middlewares/index';

const StyledTextInput = styled(TextInput)`
  max-width: 300px;
  height: 48px;
  
  @media screen and (min-width: 375px) {
    margin-left: 48px
  }
`;

function SearchInput() {
  const [value, setValue] = React.useState('');

  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();

    dispatch(filterDataForFeed({
      nameStartsWith: value,
      limit: 12,
    }));

    setValue('');
  };

  return (
    <form
      onSubmit={onSubmitForm}
    >
      <StyledTextInput
        placeholder="Search your favourite hero!"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </form>
  );
}

export default SearchInput;
