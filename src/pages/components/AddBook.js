const AddBook = () => (
  <div className="add-section">
    <h3 className="add-title"> Add New Book</h3>
    <div className="add-form">
      <input placeholder="Title" className="title-input" />
      <input placeholder="Author" className="author-input" />
      <button type="button" className="add-book">
        Add Book
      </button>
    </div>
  </div>
);

export default AddBook;
