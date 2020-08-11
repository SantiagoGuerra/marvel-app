import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import { Box } from 'grommet';
import styled from 'styled-components';
import { filterDataForFeed } from '../middlewares';

const StyledBoxPagination = styled(Box)`
  display: flex;

  & > ul {
    display: flex;
    justify-content: center;
  
    & > .pag-item {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;

      &:hover {
        background: #e23636;
      }

      & > .pag-link {
        color: white;
        text-decoration: none;
      }
    }

    & > .active {
      background: #e23636;
    }
  }
`;

function Paginate() {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);

  const feed = useSelector(state => state.feed);

  const onChangePagination = num => {
    setPagination(num);

    dispatch(filterDataForFeed({
      offset: (num - 1) * 20,
    }));
  };

  return (
    <StyledBoxPagination background="brand">
      <Pagination
        activePage={pagination}
        itemsCountPerPage={20}
        totalItemsCount={(feed.length < 20) ? feed.length : 4500}
        itemClass="pag-item"
        pageRangeDisplayed={5}
        onChange={onChangePagination}
        activeClass="active"
        linkClass="pag-link"
        hideFirstLastPages
      />
    </StyledBoxPagination>
  );
}

export default Paginate;
