import React from "react";
import {TaskListProp} from "./TaskList.d";

export default function TaskList(props: TaskListProp) {
    return (
        <div>
            {
                props.tasks.map((currentTask, index) => {
                    return (
                        <div key={index}>
                            <span>{currentTask.description} {currentTask.date}</span>
                            <button onClick={() => props.onDeleteTask(index)}>delete</button>
                            <br/><br/>
                        </div>
                    );
                })
            }
        </div>
    );
}