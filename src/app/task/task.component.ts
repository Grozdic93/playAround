import { Component, Input } from '@angular/core';
import { Itask } from '../app.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

 @Input({required:true, alias:'insideTask'}) task!: Itask
}
