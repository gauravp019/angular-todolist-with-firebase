import { Component, OnInit } from '@angular/core';
import { TaskService } from './shared/task.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {
  taskListArray: any[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTaskList().snapshotChanges()
      .subscribe(item => {
        this.taskListArray = [];
        item.forEach(element => {
          console.log(element)   //here element is object
          var x = element.payload.toJSON();
          console.log(x) //now in string

          x["key"] = element.key;
          this.taskListArray.push(x);
        });

      });
  }



  onAddClick(task) {
    if (task.value == "") {
      alert('Enter task')
    } else {
      this.taskService.addTask(task.value);
    }
  }
  onDeleteClick(task: string) {
    this.taskService.removeTask(task);
  }
}