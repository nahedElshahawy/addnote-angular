import { Injectable } from '@angular/core';
import{Task} from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = [];

  constructor() {
    let savedTasks =  localStorage.getItem('tasks');

    if (savedTasks)    this.tasks = JSON.parse(savedTasks);
    else this.tasks = [] ;

   }

deleteTask(i:number){
  this.tasks.splice(i,1);
  this.saveAll()
}

saveTask(title:any , description:any){
this.tasks.push({
  title,
  description
})
this.saveAll()
}

editTask(i:number,data:any){
this.tasks[i]=data;
this.saveAll()
}

saveAll(){
  localStorage.setItem('tasks',JSON.stringify(this.tasks))
}


}
