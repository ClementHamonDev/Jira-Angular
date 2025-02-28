import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  boards = [
    {
      id: 1,
      title : 'Board 1',
      lists: [
        {
          id: 1,
          title: 'To Do',
          tasks: [
            { id: 1, title: 'Task 1' },
            { id: 2, title: 'Task 2' }
          ]
        },
        {
          id: 2,
          title: 'In Progress',
          tasks: [
            { id: 3, title: 'Task 3' },
            { id: 4, title: 'Task 4' }
          ]
        },
        {
          id: 3,
          title: 'Done',
          tasks: [
            { id: 5, title: 'Task 5' },
            { id: 6, title: 'Task 6' }
          ]
        }
      ]
    },
    {
      id: 2,
      title : 'Board 2',
      lists: [
        {
          id: 1,
          title: 'Backlog',
          tasks: [
            { id: 1, title: 'Task A' },
            { id: 2, title: 'Task B' }
          ]
        },
        {
          id: 2,
          title: 'In Review',
          tasks: [
            { id: 3, title: 'Task C' },
            { id: 4, title: 'Task D' }
          ]
        },
        {
          id: 3,
          title: 'Completed',
          tasks: [
            { id: 5, title: 'Task E' },
            { id: 6, title: 'Task F' }
          ]
        }
      ]
    }
  ];
}
