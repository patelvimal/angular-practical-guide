import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(httpClient: HttpClient) {}

    uploadFiles(files: any): Observable<any> {
        const validFile = files[0].name;
        if (validFile.indexOf('.png') === -1) {
            return throwError('Not a Number');
        }
        return of({ status: 'file upload successfully' }).pipe(delay(2000));
    }

    validateUserName(name: string): Observable<boolean> {
        return of<boolean>(name === 'sample').pipe(delay(500));
    }
}
