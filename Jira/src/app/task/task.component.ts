import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task: { title: string; description: string } = { title: '', description: '' };  // On reçoit les données de la tâche

}
