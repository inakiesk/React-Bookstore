import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';

const BookUnit = () => {
  const dispatch = useDispatch();
  const dispatchRemoveBook = (id) => {
    dispatch(removeBookAction(id));
  };
  const books = useSelector((state) => state.books);
  return (
    books.map((book) => (
      <li key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button type="button" onClick={() => dispatchRemoveBook(book.id)}>Remove</button>
      </li>
    ))
  );
};

export default BookUnit;