import { Component, effect, Input, signal } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [TaskComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() list: { title: string; tasks: { title: string; description: string }[] } = { title: '', tasks: [] };  // On reçoit une liste de tâches

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addTask() {
    if (this.taskForm.valid) {
      this.list.tasks.push(this.taskForm.value);
      this.taskForm.reset();
    }
  }

  deleteTask(title: string) {
    this.list.tasks = this.list.tasks.filter(task => task.title !== title);
  }

}
