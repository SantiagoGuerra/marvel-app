import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterDataForFeed } from '../middlewares';

function Filter( { changeFilter, dispatch } ) {


  const [formValues, setFormValues] = useState({
    orderBy: 'name',
    limit: '5',
    offset: '0',
  });


  const onChangeValue = e => {

    const { value, name } = e.target

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }


  const onSubmitForm = e => {
    e.preventDefault()

    dispatch(filterDataForFeed(formValues));
  }

  const {orderby, limit, offset} = formValues;



  return (
    <form onSubmit={onSubmitForm}>
      Order By:
      <select name="orderBy" id="orderBy" onChange={onChangeValue} value={orderby}>
        <option value="name">Name A - Z</option>
        <option value="modified">Older </option>
        <option value="-name">Name Z - A</option>
        <option value="-modified">Most Recent</option>
      </select>

      <input type="number" placeholder="limit" name="limit" onChange={onChangeValue} value={limit}/>

      <input type="number" placeholder="offset" name="offset" onChange={onChangeValue} value={offset}/>

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Filter;
