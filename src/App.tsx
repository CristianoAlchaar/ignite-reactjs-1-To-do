import {Header} from './components/Header'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import { Task } from './components/Task'

import styles from './App.module.css';

export function App() {
  return (
    <main>
      <Header/>
      <TaskInput/>
    </main>
  )    
}


