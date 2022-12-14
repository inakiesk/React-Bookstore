const initialState = [
  {
    title: 'Crime and Punishment',
    author: 'Fiodor Dostoyevski',
    id: 1,
  },
  {
    title: 'Dialogues',
    author: 'Plato',
    id: 2,
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Bronte',
    id: 3,
  },
];

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// action creators
const addBookAction = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export { addBookAction, removeBookAction };
export default bookReducer;
