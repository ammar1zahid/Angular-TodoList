import { Component , Input} from '@angular/core';
import { SingletaskComponent } from "./singletask/singletask.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './new-task/new-task.modal';
import {TaskService} from './task.service'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [SingletaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) taskName!: string;
  @Input({required: true}) userId !: string;

  isAddingTask: boolean = false;

 
  constructor(private TaskService: TaskService) {}

  get tasksForUser() {
    return this.TaskService.getTasksForUser(this.userId);
  }

 
  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelTask() {
    this.isAddingTask = false
  }

  onCompleteTask(taskdata: NewTask) {
    this.isAddingTask = false
    
}
}
