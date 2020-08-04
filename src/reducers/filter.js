const initialState = {
  currentCategory: 'characters',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return { ...state, currentCategory: action.payload.currentCategory };
    default:
      return state;
  }
};

export default filterReducer;
