import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../models/task";

@Injectable({
    providedIn: "root",
})

export class TaskService {

    private url = "http://localhost:8080/api/tasks";

    constructor(private http:HttpClient) {}

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.url);
    }

    getTask(id: number) : Observable<Task> {
        return this.http.get<Task>(`${this.url}/${id}`);
    }

    createTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.url, task);
    }

    updateTask(id: number,task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.url}/${id}`, task);
    }

    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }

}