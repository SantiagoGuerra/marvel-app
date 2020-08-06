import React from 'react';
import {
  Tabs as TabsContainer,

  Tab,

} from 'grommet';
import ShowTabInformation from './ShowTabInformation';

function Tabs({
  comics, events, series, stories,
}) {
  return (
    <TabsContainer
      alignControls="start"
      margin={{
        top: 'xlarge',
      }}
    >
      <Tab title="Comics">
        <ShowTabInformation dataTab={comics} />
      </Tab>
      <Tab title="Events">
        <ShowTabInformation dataTab={events} />

      </Tab>
      <Tab title="Series">
        <ShowTabInformation dataTab={series} />

      </Tab>
      <Tab title="Stories">
        <ShowTabInformation dataTab={stories} />

      </Tab>
    </TabsContainer>
  );
}

export default Tabs;
