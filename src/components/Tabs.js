import React from 'react';
import {
  Tabs as TabsContainer,

  Tab,

} from 'grommet';
import PropTypes from 'prop-types';
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

Tabs.defaultProps = {
  comics: {},
  series: {},
  stories: {},
  events: {},
};

Tabs.propTypes = {
  comics: PropTypes.oneOfType([PropTypes.object]),
  series: PropTypes.oneOfType([PropTypes.object]),
  stories: PropTypes.oneOfType([PropTypes.object]),
  events: PropTypes.oneOfType([PropTypes.object]),
};

export default Tabs;
