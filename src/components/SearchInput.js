import React from 'react';
import { TextInput } from 'grommet';
import styled from 'styled-components';

const StyledTextInput = styled(TextInput)`
  max-width: 300px;
  height: 48px;
  
  @media screen and (min-width: 375px) {
    margin-left: 48px
  }
`;

function SearchInput() {
  const [value, setValue] = React.useState('');
  return (
    <StyledTextInput
      placeholder="Search your favourite hero!"
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
}

export default SearchInput;
