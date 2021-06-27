import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

    getCustomerForm() {
        return this.fb.group({
            name: ['', [Validators.required]],
            dateOfBirth: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            country: ['', [Validators.required]],
            consent: ['', [Validators.required]]
        });
    }
}
