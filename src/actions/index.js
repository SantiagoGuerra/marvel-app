export const getFeed = content => ({
  type: 'GET_FEED',
  payload: { content },
});

export const changeCurrentCategory = currentCategory => ({
  type: 'CHANGE_CATEGORY',
  payload: {
    currentCategory,
  },
});

export const changeFilter = options => ({
  type: 'CHANGE_FILTER',
  payload: {
    options,
  },
});

export const setCharacterData = data => ({
  type: 'SET_CHARACTER_DATA',
  payload: {
    data,
  },
});
