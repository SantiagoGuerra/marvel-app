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
