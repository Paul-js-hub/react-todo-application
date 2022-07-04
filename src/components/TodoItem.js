import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => (
  <div>
    <li>{todo.title}</li>
  </div>
);

TodoItem.defaultProps = {
  todo: {},
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default TodoItem;
