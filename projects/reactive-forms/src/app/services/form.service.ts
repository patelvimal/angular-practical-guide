import { Injectable } from '@angular/core';
import {
    FormBuilder,
    Validators,
    AsyncValidatorFn,
    AsyncValidator
} from '@angular/forms';
import { userNameValidator } from '../validation/userName.validator';
import { ApiService } from './api.service';
import { FormGroupConfig } from '../formgroup.type';
import { Person } from '@reactive-forms/type-safe-form/type-safe-form.model';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    constructor(public fb: FormBuilder, public apiService: ApiService) {}

    getBasicForm() {
        const form: FormGroupConfig<Person> = {
            firstName: [''],
            lastName: [''],
            age: [0],
            isValid: [false]
        };
        return this.fb.group(form);
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
            consent: ['', [Validators.required]],
            fileName: ['', [Validators.required]]
        });
    }
}
