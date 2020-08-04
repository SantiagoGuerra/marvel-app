const feedReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_FEED':
      return action.payload.content;
    default:
      return state;
  }
};

export default feedReducer;
