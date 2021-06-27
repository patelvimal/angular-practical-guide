import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, delay, takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(httpClient: HttpClient) {}

    uploadFiles(files: any): Observable<any> {
        console.log(files);
        return of({ status: 'file upload successfully' }).pipe(delay(2000));
    }

    validateUserName(name: string): Observable<boolean> {
        return of<boolean>(name === 'sample').pipe(delay(500));
    }
}
