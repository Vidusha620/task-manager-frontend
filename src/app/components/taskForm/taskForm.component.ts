import { Component,OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { TaskService } from "../../services/task.service";
import { Task } from "../../models/task";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from '@angular/forms';

@Component({
    selector: "app-task-form",
    templateUrl: "./taskForm.component.html",
    styleUrls: ["./taskForm.component.scss"],
    standalone: true,
    imports: [
        MatToolbarModule, 
        MatCardModule, 
        MatButtonModule, 
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule, 
        FormsModule
    ],
})
export class TaskFormComponent implements OnInit {
    task: Task = {
        id: 0,
        title: "",
        description: "",
        status: "pending",
    };
    isUpdate: boolean = false;

    constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {}
    ngOnInit(): void {
        const id = this.route.snapshot.params["id"];
        if (id) {
            this.isUpdate = true;
            this.taskService.getTask(id).subscribe((data) => {
                this.task = data;
            });
        }
    }

    saveTask(): void {
        if (this.isUpdate) {
            this.taskService.updateTask(this.task.id, this.task).subscribe(() => {
                this.router.navigate(["/"]);
            });
        } else {
            this.taskService.createTask(this.task).subscribe(() => {
                this.router.navigate(["/"]);
            });
        }
    }

}