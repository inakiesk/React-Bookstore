import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookAPI, fetchBooksAPI } from '../../redux/books/books';

const BookUnit = () => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksAPI());
  }, [dispatch]);
  const removeBookEvent = (book) => {
    dispatch(removeBookAPI(book.id));
  };

  return (
    books.map((book) => (
      <li key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button type="button" onClick={() => removeBookEvent(book.id)}>Remove</button>
      </li>
    ))
  );
};

export default BookUnit;
