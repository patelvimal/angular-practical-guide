import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '@reactive-forms/services/form.service';

@Component({
    selector: 'app-form-validation',
    templateUrl: './form-validation.component.html',
    styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
    public userForm: FormGroup = new FormGroup({});
    genderList: string[] = ['Male', 'Female'];
    countryList: any = [
        { id: 1, value: 'India' },
        { id: 2, value: 'Canada' }
    ];
    constructor(public formService: FormService) {}

    ngOnInit(): void {
        this.userForm = this.formService.getCustomerForm();
    }
}
