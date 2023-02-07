import { Task } from './Task'; 

import { useState , useEffect } from 'react';

import styles from './TaskList.module.css';

import clipboardIcon from '../assets/clipboard.svg';

/*const tasks: Array<any> = [
    {
        isDone: false,
        description: "Andar com o cão"
    },
    {
        isDone: true,
        description: "Comer batata"
    }
];*/

interface task{
    id : string;
    isDone : boolean;
    description: string;
}

interface propsInterface{
    list : Array<task>;
    onDeleteTask: (deleteTaskId: string) => void;
    onChangeDoneValue: (deleteTaskId: string) => void;
}

function emptyTaskMessage(createdTask:number, concludedTask:number){
    return(
        <div className={styles.TaskList}>
            <div className={styles.UpperCount}>
                <h3>Tarefas Criadas <span className={styles.Blue}>{createdTask}</span></h3>
                <h3>Concluídas <span className={styles.Purple}>{concludedTask}</span></h3>
            </div>
            <div className={styles.MainMessage}>
                <img src={clipboardIcon}/>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}

export function TaskList(props:propsInterface){
    const listLength = Object.keys(props.list).length;

    let createdTasksCount = listLength;

    let concludedTasksCount = 0;

    concludedTasksCount = Object.values(props.list).filter(task => {
        if(task.isDone){
            return true
        }
    }).length;

    if(listLength == 0){
        return emptyTaskMessage(createdTasksCount, concludedTasksCount)
    }
    else{  
        return(
            <div className={styles.TaskList}>
                <div className={styles.UpperCount}>
                    <h3>Tarefas Criadas <span className={styles.Blue}>{createdTasksCount}</span></h3>
                    <h3>Concluídas <span className={styles.Purple}>{concludedTasksCount}</span></h3>
                </div>
                <ul>  
                    {Object.values(props.list).map(task =>{
                        return(
                            <li key={task.id}>
                                <Task
                                    key={task.id}
                                    id={task.id}
                                    isDone = {task.isDone}
                                    description = {task.description}
                                    onDeleteTask = {props.onDeleteTask}
                                    onChangeDoneValue = {props.onChangeDoneValue}
                                />  
                            </li> 
                        )      
                    })}        
                </ul>
            </div>
        )
    }
}