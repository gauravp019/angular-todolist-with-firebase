import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }
  getTaskList() {
    this.taskList = this.firebasedb.list('taskList');
    return this.taskList;
  }
  addTask(task: string) {
    this.taskList.push({
      name: task,
    });
  }
  removeTask(task: string) {
    this.taskList.remove(task);
  }

}
