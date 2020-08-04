import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Filter( { changeFilter, dispatch } ) {



  const [formValues, setFormValues] = useState({
    orderby: 'name',
    limit: '5',
    offset: '0'
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

    dispatch(changeFilter(formValues));
  }

  const {orderby, limit, offset} = formValues;



  return (
    <form onSubmit={onSubmitForm}>
      Order By:
      <select name="orderby" id="orderby" onChange={onChangeValue} value={orderby}>
        <option value="name">Name Asc</option>
        <option value="modified"> Modified </option>
        <option value="-name">Name Des</option>
        <option value="-modified">Modified Des</option>
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
