import styles from './Task.module.css';

import trashIcon from '../assets/trash.svg';
import { useState } from 'react';

interface TaskProps{
    id: string;
    isDone : boolean;
    description: string;
    onDeleteTask: (toDeletId: string) => void;
    onChangeDoneValue: (toDeletId: string) => void
}

export function Task(props:TaskProps){
    const [isChecked, setIsChecked] = useState(props.isDone);

    function handleDeleteTask(){
        props.onDeleteTask(props.id);
    }

    function handleChangeDoneTask(){
        setIsChecked(!isChecked);
        props.onChangeDoneValue(props.id);
    }

    return(
        <div className={styles.Task}>
            <label className={styles.lblContainer}>
                <input type="checkbox" onChange={handleChangeDoneTask} checked={isChecked}/>
                <span className={styles.checkmark}></span>
            </label>
            <p className={isChecked ? styles.disabled : ''}>{props.description}</p> 
            <img className={styles.trashIcon} src={trashIcon} onClick={handleDeleteTask}></img>
        </div>
    )       
}