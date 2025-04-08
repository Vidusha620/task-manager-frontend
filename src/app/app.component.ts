import { Component } from '@angular/core';
import { TaskListComponent } from "./components/taskList/taskList.component";
import { TaskFormComponent } from "./components/taskForm/taskForm.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent]
})
export class AppComponent {
  title = 'task-manager-frontend';
}
