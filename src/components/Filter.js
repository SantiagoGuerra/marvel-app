import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import {
  Sidebar, Avatar, Nav, Button, Box, Select, FormField, RangeInput,
} from 'grommet';
import { filterDataForFeed } from '../middlewares';
import marvelLogoIMG from '../assets/marvel.png';

const StyledBox = styled.div`
  position: fixed;
`;

function Filter() {
  const dispatch = useDispatch();

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
    <StyledBox>
      <Sidebar
        background="brand"
        width="300px"
        height="100vh"
        position="absolute"
        header={(
          <Box justify="center" direction="row" margin="small">
            <Link exact to="/">
              <Avatar
                src={marvelLogoIMG}
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
    </StyledBox>
  );
}

export default Filter;
