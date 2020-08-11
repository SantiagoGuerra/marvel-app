import React, { useEffect } from 'react';
import { Heading, List } from 'grommet';
import PropTypes from 'prop-types';

const ShowTabInformation = ({ dataTab }) => {
  useEffect(() => {
  }, []);

  return (
    <>

      <Heading
        margin={{
          top: 'medium',
        }}
        size="small"
      >
        {`Available: ${dataTab.available || ''}`}
      </Heading>
      <List
        primaryKey="name"
        secondaryKey="percent"
        data={dataTab.items || []}
      />

    </>
  );
};

ShowTabInformation.defaultProps = {
  dataTab: {},
};

ShowTabInformation.propTypes = {
  dataTab: PropTypes.oneOfType([PropTypes.object]),
};

export default ShowTabInformation;
