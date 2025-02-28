import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListComponent } from "../list/list.component";

@Component({
  selector: 'app-board-details',
  imports: [CommonModule, ListComponent],
  templateUrl: './board-details.component.html',
  styleUrl: './board-details.component.css'
})
export class BoardDetailsComponent {
  @Input() lists: { id: number; title: string; tasks: { title: string; description: string; }[]; }[];

  constructor() {
    this.lists = [];
  }
}
