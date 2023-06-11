import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTodo } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
      <input
        placeholder="Find todo, please enter a text"
        onChange={e => dispatch(filterTodo(e.target.value))}
      />
  );
};

export default Filter;
