import React, { useEffect } from 'react';
import { Heading, List } from 'grommet';

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
        {`Available: ${dataTab?.available}`}
      </Heading>
      <List
        primaryKey="name"
        secondaryKey="percent"
        data={dataTab?.items}
      />

    </>
  );
};

export default ShowTabInformation;
