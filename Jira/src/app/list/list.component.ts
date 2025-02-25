import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [TaskComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() list: { title: string; tasks: { title: string; description: string }[] } = { title: '', tasks: [] };  // On reçoit une liste de tâches

}
