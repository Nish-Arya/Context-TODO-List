import React from 'react';

const Task = () => {
  const handleClick = () => {

  }

  return (
    <li>
      <h1>Hi, I'm a task in your to-do list!</h1>
      <button onClick={handleClick}>Delete Task</button>
    </li>
  );
}

export default Task;
