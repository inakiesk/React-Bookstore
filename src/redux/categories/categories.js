const initialState = [];

// Action
const CHECK_STATUS = 'CHECK_STATUS';

// Action Creator
const checkStatusAction = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export { checkStatusAction };
export default categoriesReducer;
