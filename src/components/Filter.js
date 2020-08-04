import React from 'react';

function Filter() {
  return (
    <form>
      Order By:
      <select name="orderby" id="orderby">
        <option value="name">Name Asc</option>
        <option value="modified"> Modified </option>
        <option value="-name">Name Des</option>
        <option value="-modified">Modified Des</option>
      </select>

      <input type="number" placeholder="limit" name="limit" />

      <input type="number" placeholder="offset" name="offset" />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Filter;
