import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos }) => (
  <div>
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  </div>
);

TodosList.defaultProps = {
  todos: [],
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todo: PropTypes.string,
    }),
  ),
};

export default TodosList;
