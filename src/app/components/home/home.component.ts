import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public tasksSer:TasksService,private title:Title) {
    this.title.setTitle('Task Manager')
  }

  ngOnInit(): void {
  }

  deleteTask(i:number){
    this.tasksSer.deleteTask(i);
  }

}
