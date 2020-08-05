const characterInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CHARACTER_DATA':
      return { ...action.payload.data };
    default:
      return state;
  }
};

export default characterInfoReducer;
