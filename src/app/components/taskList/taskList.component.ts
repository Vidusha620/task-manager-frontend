import { Component } from "@angular/core";
import { Task } from "../../models/task";
import { OnInit } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { Router } from "@angular/router";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: "app-task-list",
    templateUrl: "./taskList.component.html",
    styleUrls: ["./taskList.component.scss"],
    imports: [MatToolbarModule, MatCardModule, MatButtonModule],
    standalone: true
})

export class TaskListComponent implements OnInit {
    tasks: Task[] = [];
   
    constructor(private taskService: TaskService,private router:Router) {}

    ngOnInit(): void {
            this.getTasks();
        }

    getTasks(): void {
            this.taskService.getTasks().subscribe(data => this.getTasks);
        }

    createTask(): void {
            this.router.navigate(['/add']);
        }

    getTask(id: number): void {
            this.taskService.getTask(id).subscribe(data => this.getTask(id));  
        }
    updateTask(id: number): void {
            this.router.navigate(['/update', id]);
        }

    deleteTask(id: number): void {
            this.taskService.deleteTask(id).subscribe(() => this.getTask(id));
        }


}
