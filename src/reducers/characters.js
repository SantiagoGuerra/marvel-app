const characters = (state = [], action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return action.payload.characters;
    default:
      return state;
  }
};

export default characters;
