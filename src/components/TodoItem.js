import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleChange, handleDeleteTodo }) => (
  <div>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => handleChange(todo.id)}
    />
    <button type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    <li>{todo.title}</li>
  </div>
);

TodoItem.defaultProps = {
  todo: {},
  handleChange: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
};

export default TodoItem;
