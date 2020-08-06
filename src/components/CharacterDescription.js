import React from 'react';
import {
  Box, Image, Heading, Text,
} from 'grommet';
import PropTypes from 'prop-types';

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

CharacterDescription.propTypes = {
  thumbnail: PropTypes.oneOfType([PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CharacterDescription;
