import styles from './Task.module.css';

import trashIcon from '../assets/trash.svg';

interface TaskProps{
    id: string;
    isDone : boolean;
    description: string;
    onDeleteTask: (toDeletId: string) => void;
    onChangeDoneValue: (toDeletId: string) => void
}

export function Task(props:TaskProps){

    function handleDeleteTask(){
        props.onDeleteTask(props.id);
    }

    function handleChangeDoneTask(){
        props.onChangeDoneValue(props.id);
    }

    if(props.isDone == true){  //foi feito
        return(
            <div className={styles.Task}>
                    <label className={styles.lblContainer}>
                        <input type="checkbox" onChange={handleChangeDoneTask} checked/>
                        <span className={styles.checkmark}></span>
                    </label>
                    <p className={styles.disabled}>{props.description}</p> 
                    <img className={styles.trashIcon} src={trashIcon} onClick={handleDeleteTask}></img>
                </div>
        )
    }
    else{ //não foi feito
        return(
            <div className={styles.Task}>
                <label className={styles.lblContainer}>
                    <input type="checkbox" onChange={handleChangeDoneTask}/>
                    <span className={styles.checkmark}></span>
                </label>
                <p>{props.description}</p> 
                <img className={styles.trashIcon} src={trashIcon} onClick={handleDeleteTask}></img>
            </div>
        )
    }       
}