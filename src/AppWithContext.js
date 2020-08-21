import React from 'react';
import TodoContext from './contexts/TodoContext';
import App from './App';

class AppWithContext extends React.Component {
  constructor() {
    super();
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    this.state = {
        tasks: storedTasks ? storedTasks : {},
        createTask: this.createTask,
        deleteTask: this.deleteTask
    }
  }

  createTask = (task) => {
    debugger;
    let date = new Date();
    let nextTaskId = date.getTime();
    const newTask = {
        [nextTaskId]: {
            id: nextTaskId,
            message: task
        },
    };
    this.setState((state, props) => ({
      tasks: { ...state.tasks, ...newTask },
    }), () => this.updateLocalStorageTasks());
  }

  deleteTask = (id) => {
    this.setState((state, props) => {
      const tasksWithDeletion = { ...state.tasks };
      delete tasksWithDeletion[id];
      return {
        tasks: tasksWithDeletion,
      }
    })
  }

  updateLocalStorageTasks = () => {
    console.log(this.state.tasks);
    const jsonTasks = JSON.stringify(this.state.tasks);
    localStorage.setItem('tasks', jsonTasks);
  }

  render () {
    return (
      <TodoContext.Provider value={this.state}>
        <App />
      </TodoContext.Provider>
    );
  }
}

export default AppWithContext;
