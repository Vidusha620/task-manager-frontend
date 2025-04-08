import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Task } from "../models/task";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: "root",
})

export class TaskService {

    private url = `${environment.apiUrl}/tasks`;

    constructor(private http:HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.url)
            .pipe(catchError(this.handleError));
    }

    getTask(id: number): Observable<Task> {
        return this.http.get<Task>(`${this.url}/${id}`)
            .pipe(catchError(this.handleError));
    }

    createTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.url, task)
            .pipe(catchError(this.handleError));
    }

    updateTask(id: number, task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.url}/${id}`, task)
            .pipe(catchError(this.handleError));
    }

    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`)
            .pipe(catchError(this.handleError));
    }

}