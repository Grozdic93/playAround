import { NgFor, NgForOf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { CockpitComponent } from './cockpit/cockpit.component';

export interface Itask {
  name: string;
  importance: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NgForOf,
    TaskComponent,
    CockpitComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'playAround';
  

  tasks: Itask[] = [
    {
      name: 'drink coffee',
      importance: 5,
    },
    {
      name: 'study',
      importance: 1,
    },
  ];

  onAddToTasks(obj: Itask){
    this.tasks.push(obj)
  }
}
