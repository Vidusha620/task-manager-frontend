import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskListComponent } from "./components/taskList/taskList.component";
import { TaskFormComponent } from "./components/taskForm/taskForm.component";

const routes: Routes = [
    { path: "", component: TaskListComponent },
    { path: "add", component: TaskFormComponent },
    { path: "update/:id", component: TaskFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}