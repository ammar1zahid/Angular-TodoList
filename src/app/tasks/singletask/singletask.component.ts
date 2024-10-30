import { Component, Input, inject} from '@angular/core';
import { DatePipe } from '@angular/common';
import {Task } from './singletask.modal';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-singletask',
  standalone: true,
  imports: [CardComponent , DatePipe],
  templateUrl: './singletask.component.html',
  styleUrl: './singletask.component.css'
})
export class SingletaskComponent {

  @Input({required: true}) task!: Task

 

  private taskService = inject(TaskService)

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }

}
