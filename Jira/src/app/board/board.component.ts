import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardDetailsComponent } from "../board-details/board-details.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  imports: [CommonModule, BoardDetailsComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  lists = [
    {
      id: 1,
      title: 'To Do',
      tasks: [
        { title: 'Task 1', description: 'Description for task 1' },
        { title: 'Task 2', description: 'Description for task 2' }
      ]
    },
    {
      id: 2,
      title: 'In Progress',
      tasks: [
        { title: 'Task 3', description: 'Description for task 3' }
      ]
    },
    {
      id: 3,
      title: 'Done',
      tasks: [
        { title: 'Task 4', description: 'Description for task 4' }
      ]
    }
  ];;  // Exemple de données pour le board

  boardId: string | null = null;
  constructor(private route : ActivatedRoute) {
    this.boardId = this.route.snapshot.paramMap.get("id");
  }

}


