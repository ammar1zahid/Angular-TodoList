import { Component ,Output,EventEmitter, inject, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.modal';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required: true}) userId!: string
  @Output() cancel = new EventEmitter<void>();
  

  private taskservice = inject(TaskService);


  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onClose() {
    this.cancel.emit();
  }

  onCreateTask() {

    if (this.enteredTitle.trim().length === 0 || this.enteredSummary.trim().length === 0 || this.enteredDueDate.trim().length === 0) {
      return;
    }

    this.taskservice.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);

    this.cancel.emit();
  }
}