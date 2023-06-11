import { Grid, GridItem, Todo } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from 'redux/selectors';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <Grid>
        {filteredTodos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default TodoList;
