import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    constructor(public fb: FormBuilder) {}

    getBasicForm() {
        return this.fb.group({
            firstName: [''],
            lastName: ['']
        });
    }
}
