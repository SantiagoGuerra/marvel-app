import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';

import {
  Sidebar, Avatar, Nav, Button, Box, Header, Select, FormField, TextInput, RangeInput,
} from 'grommet';
import {
  Help, Projects, Clock, Home,
} from 'grommet-icons';
import { filterDataForFeed } from '../middlewares';

function Filter({ dispatch }) {
  const [formValues, setFormValues] = useState({
    orderBy: 'name',
    limit: '5',
    offset: '0',
  });

  const onChangeValue = e => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmitForm = e => {
    e.preventDefault();

    dispatch(filterDataForFeed(formValues));
  };

  const { orderby, limit, offset } = formValues;

  return (
    <div>
      <Sidebar
        background="brand"
        width="300px"
        height="100vh"
        position="absolute"
        header={(
          <Box justify="center" direction="row" margin="small">
            <Link exact to="/">
              <Avatar
                src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
                size="xlarge"
                justify="center"
              />
            </Link>
          </Box>
        )}
      >
        <Nav
          gap="small"
        >
          <form
            onSubmit={onSubmitForm}
          >
            <Select
              options={['name', 'modified', '-name', '-modified']}
              name="orderBy"
              margin={
                { bottom: 'medium' }
              }
              value={orderby}
              width="small"
              onChange={onChangeValue}
              hoverIndicator
            />
            <FormField label="Limit">
              <RangeInput
                value={limit}
                name="limit"
                onChange={onChangeValue}
                max="24"
              />
            </FormField>
            <FormField label="Offset">
              <RangeInput
                value={offset}
                name="offset"
                onChange={onChangeValue}
                max="12"
              />
            </FormField>
            <Button
              type="submit"
              primary
              label="Filter"
              fill="horizontal"
              margin={
                { top: 'medium' }
              }
            />
          </form>
        </Nav>
      </Sidebar>
    </div>
  );
}

export default Filter;
