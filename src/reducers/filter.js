const initialState = {
  currentCategory: 'characters',
  offset: 0,
  orderBy: 'name',
  limit: 12,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return { ...state, currentCategory: action.payload.currentCategory };

    case 'CHANGE_FILTER':
      return { ...state, ...action.payload.options };
    default:
      return state;
  }
};

export default filterReducer;
