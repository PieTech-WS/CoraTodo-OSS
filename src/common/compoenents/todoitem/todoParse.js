class todoParse{
    constructor(todoContent) {
      this.name = todoContent.name;
      this.alertTime = todoContent.alert_time;
      this.completed = todoContent.completed;
      this.priority = todoContent.priority;
      this.alertDate = todoContent.alert_date;
    }
   }
todoParse('test')