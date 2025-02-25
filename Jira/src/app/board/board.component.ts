import { Component } from '@angular/core';
import { ListComponent } from "../list/list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  imports: [ListComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  board = [
    {
      title: 'To Do',
      tasks: [
        { title: 'Task 1', description: 'Description for task 1' },
        { title: 'Task 2', description: 'Description for task 2' }
      ]
    },
    {
      title: 'In Progress',
      tasks: [
        { title: 'Task 3', description: 'Description for task 3' }
      ]
    },
    {
      title: 'Done',
      tasks: [
        { title: 'Task 4', description: 'Description for task 4' }
      ]
    }
  ];  // Exemple de données pour le board
}
