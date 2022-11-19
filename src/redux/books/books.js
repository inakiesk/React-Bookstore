const initialState = [];

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IerfhGMngtud1245agfl/books';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

// action creators
const addBookAction = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

export const addBookAPI = ({
  id, title, author, category,
}) => async (dispatch) => {
  const book = {
    item_id: id,
    title,
    author,
    category,
  };
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBookAction({
    id, title, author, category,
  }));
};

export const removeBookAPI = (id) => async (dispatch) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch(removeBookAction(id)));
};

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export { addBookAction, removeBookAction, fetchBooks };
export default bookReducer;
