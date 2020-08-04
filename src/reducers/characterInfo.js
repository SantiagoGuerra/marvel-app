const initialState = {
  data: [],
}

const characterInfoReducer = (state = initialState, action) => {

  switch (action.key) {
    case 'SET_CHARACTER_DATA':
      return { ...state, ...action.payload.data };
    default:
      return state
  }
}


export default characterInfoReducer;
