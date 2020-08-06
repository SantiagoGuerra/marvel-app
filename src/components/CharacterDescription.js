import React from 'react';
import {
  Box, Image, Heading, Text,
} from 'grommet';

function CharacterDescription({ thumbnail, name, description }) {
  return (
    <>
      <Box height="medium">
        <Image
          fit="cover"
          src={`${thumbnail?.path}.${thumbnail?.extension}`}
        />
      </Box>
      <Box direction="column" gap="small" basis="80%">
        <Heading>{name}</Heading>

        <Text>{description}</Text>
      </Box>
    </>
  );
}

export default CharacterDescription;
