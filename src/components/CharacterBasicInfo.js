import React, { useEffect, useState } from "react";
import { Box, List, Heading, Text, Image, Tabs, Tab, Meter} from "grommet";



const ShowTabInformation = ({dataTab}) => {


  useEffect(() => {
  }, [])


  const available = dataTab?.available

  return (
    <>

   

      <Heading
        margin={{
          top: 'medium'
        }}
        size="small"
      >
        Available: {available}
      </Heading>
      <List
        primaryKey="name"
        secondaryKey="percent"
        data={dataTab?.items}
      />


    </>
  )
}


function CharacterBasicInfo({ data }) {


  const [dat, setData] = useState({})

  useEffect(() => {
    setData(data)
  }, [data])


  const {thumbnail, name, comics, events, series, stories, description} = dat

  console.log(comics);

  return (
    <>
      <Box direction="column" wrap gap="medium">
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
      </Box>
      <Tabs
        alignControls="start"
        margin={{
          top: 'xlarge'
        }}
      >
        <Tab title="Comics">
          <ShowTabInformation dataTab={comics}/>
        </Tab>
        <Tab title="Events">
        <ShowTabInformation dataTab={events}/>

        </Tab>
        <Tab title="Series">
        <ShowTabInformation dataTab={series}/>

        </Tab>
        <Tab title="Stories">
        <ShowTabInformation dataTab={stories}/>

        </Tab>
      </Tabs>
    </>
  );
}

export default CharacterBasicInfo;
