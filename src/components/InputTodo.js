import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('');
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0) {
      handleAddTodo(title);
      setTitle('');
    } else {
      alert('Enter a title');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo" value={title} onChange={handleOnChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

InputTodo.defaultProps = {
  handleAddTodo: PropTypes.func,
};

InputTodo.propTypes = {
  handleAddTodo: PropTypes.func,
};

export default InputTodo;
