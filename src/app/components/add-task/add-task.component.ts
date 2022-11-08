import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public tasksSer:TasksService , private router:Router,private title:Title) {

    this.title.setTitle('Add New Task-Task Manager')
   }

  ngOnInit(): void {
  }

  saveTask(title:any,description:any){
  this.tasksSer.saveTask(title.value, description.value)
  this.router.navigate(['/'])
  }



}
