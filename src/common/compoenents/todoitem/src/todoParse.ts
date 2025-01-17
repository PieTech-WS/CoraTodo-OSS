/*
已实现的内容:
name
alertTime
priority
completed
*/

import { todo, time, date } from "../todojs/interface";
export class todoItem {
    name: String;
    alertTime: time;
    priority: Number;
    completed: Boolean;
    alertDate: date;
    constructor(todoContent: todo) {
        this.name = todoContent.name;
        this.alertTime = todoContent.alert_time;
        this.completed = todoContent.completed;
        this.priority = todoContent.priority;
        this.alertDate = todoContent.alert_date;
    }
}