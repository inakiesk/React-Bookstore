import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer, { fetchBooksAPI } from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
},
applyMiddleware(thunk));

store.dispatch(fetchBooksAPI());

export default store;
