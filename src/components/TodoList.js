import React from 'react';
import Task from './Task';
import TodoContext from '../contexts/TodoContext';

class TodoList extends React.Component {

  static contextType = TodoContext;

  render () {
    let taskArray = Object.values(this.context.tasks);
    return (
      <ul>
        {taskArray.map(task => {
          return (<Task key={task.id} task={task} deleteTask={this.context.deleteTask}></Task>)
        })}
      </ul>
    );
  }
}

export default TodoList;
