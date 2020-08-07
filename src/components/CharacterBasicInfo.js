import React, { useEffect, useState } from 'react';
import {
  Box,
} from 'grommet';
import PropTypes from 'prop-types';
import CharacterDescription from './CharacterDescription';
import Tabs from './Tabs';

function CharacterBasicInfo({ data }) {
  const [dat, setData] = useState({});

  useEffect(() => {
    setData(data);
  }, [data]);

  const {
    thumbnail, name, comics, events, series, stories, description,
  } = dat;

  return (
    <>
      <Box direction="column" wrap gap="medium" />

      <CharacterDescription
        thumbnail={thumbnail}
        name={name}
        description={description}
      />
      <Tabs
        comics={comics}
        events={events}
        series={series}
        stories={stories}
      />
    </>
  );
}

CharacterBasicInfo.defaultProps = {
  data: {},
};

CharacterBasicInfo.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]),
};

export default CharacterBasicInfo;
