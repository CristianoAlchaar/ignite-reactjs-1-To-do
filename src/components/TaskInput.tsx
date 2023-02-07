import styles from './TaskInput.module.css'

import { useRef , useEffect, FormEvent, useState, ChangeEvent} from 'react';

import { v4 as uuid } from 'uuid';

import { TaskList } from './TaskList'

import plusIcon from '../assets/plus.svg'


export function TaskInput(){

    const [tasks, setTasks] = useState<{id: string; isDone: boolean; description: string}[]>([]);
        /*{   
            id: "1",
            isDone: false,
            description: "Andar com o cão"
        },
        {
            id: "2",
            isDone: true,
            description: "Comer batata"
        },
        {
            id: "3",
            isDone: false,
            description: "Lavar Roupa"
        }*/

    const [newTaskText, setTaskText] = useState('');

    function handleCreateNewTask(event: FormEvent) {  
        event.preventDefault();
        const generateId = uuid();
        setTasks([...tasks, {id:generateId, isDone:false, description:newTaskText}]);
        setTaskText('');
    }

    function handleNewTaskDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setTaskText(event.target.value);
    }

    function deleteTask(idTasktoDelete:string){
        const tasksWithoutDeteledOne = tasks.filter(task => {
            return task.id != idTasktoDelete;         
        })

        setTasks(tasksWithoutDeteledOne)
    }

    function changeDoneValue(idTasktoChange:string){
        const tasksChanged = tasks.map(task => {
            if(task.id === idTasktoChange){
                return {
                    id: task.id,
                    isDone: task.isDone ? false : true,
                    description: task.description
                };       
            } 
            else{return task}     
        })
        setTasks(tasksChanged);
    }

    /*useEffect(() => {
        const input = document.getElementById('taskInput');
        console.log(input);
        console.log(input?.innerHTML);
    },[]);*/

    return(
        <>
            <form onSubmit={handleCreateNewTask}
                className={styles.addTaskForm}>
                <input type="text" 
                    name="taskDescriptionInput" 
                    placeholder="Adicione uma nova tarefa" 
                    onChange={handleNewTaskDescriptionChange} 
                    value={newTaskText}
                />
                <button type="submit">Criar<img src={plusIcon}/></button>
            </form>
            <TaskList list={[...tasks]} onDeleteTask={deleteTask} onChangeDoneValue={changeDoneValue}/>
        </>
    );
}