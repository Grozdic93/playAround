import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Itask } from '../app.component';

@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @ViewChild('nameField') taskName?:ElementRef;
  @ViewChild('importanceField') TaskImportance?:ElementRef;
  @Output() onTaskAdded = new EventEmitter<Itask>();

  onAddToTasks(){
    let name = this.taskName?.nativeElement.value
    let importance = this.TaskImportance?.nativeElement.value
    let obj: Itask = {
      name: name,
      importance: importance
    }
    this.onTaskAdded.emit(obj)
  }
}
