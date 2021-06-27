import { Injectable } from '@angular/core';
import {
    FormBuilder,
    Validators,
    AsyncValidatorFn,
    AsyncValidator
} from '@angular/forms';
import { userNameValidator } from '../validation/userName.validator';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    constructor(public fb: FormBuilder, public apiService: ApiService) {}

    getBasicForm() {
        return this.fb.group({
            firstName: [''],
            lastName: ['']
        });
    }

    getCustomerForm() {
        return this.fb.group({
            name: [
                '',
                {
                    updateOn: 'blur',
                    validators: [Validators.required],
                    asyncValidators: [userNameValidator(this.apiService)]
                }
            ],
            dateOfBirth: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            country: ['', [Validators.required]],
            consent: ['', [Validators.required]]
        });
    }
}
