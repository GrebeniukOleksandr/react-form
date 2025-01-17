import { useState } from 'react';
import Form from '../Form/Form.jsx';
import css from './App.module.css';
import initialTasks  from '../../tasks.json';
import TasksList from '../TasksList/TasksList.jsx';
import Filter from '../Filter/Filter.jsx';
import FeedbackForm from '../FeedbackForm/FeedbackForm.jsx';

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");
  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        newTask 
      ]
    })
  };
  const deleteTask = (taskId) => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== taskId)
    })
  }
  const visibleTasks = tasks.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div className={css.container}>
      <FeedbackForm />
      <hr />
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TasksList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  )
};

