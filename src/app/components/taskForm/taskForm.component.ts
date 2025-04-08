import { Component,OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { TaskService } from "../../services/task.service";
import { Task } from "../../models/task";

@Component({
    selector: "task-form-app",
    templateUrl: "./taskForm.component.html",
})
export class TaskFormComponent implements OnInit {
    task: Task = {
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