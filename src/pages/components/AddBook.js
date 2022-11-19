import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAction } from '../../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const authorChange = (e) => {
    setAuthor(e.target.value);
  };
  const sendBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    setTitle('');
    setAuthor('');
    setCategory('');
    dispatch(addBookAction(newBook));
  };
  return (
    <div>
      <form onSubmit={sendBookToStore}>
        <input type="text" placeholder="Title" value={title} onChange={titleChange} required />
        <input type="text" placeholder="Author" value={author} onChange={authorChange} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
