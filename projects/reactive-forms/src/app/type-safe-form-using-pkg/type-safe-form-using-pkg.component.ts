import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '@reactive-forms/services/form.service';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { Employee } from './type-safe-form.model';

@Component({
    selector: 'app-type-safe-form-using-pkg',
    templateUrl: './type-safe-form-using-pkg.component.html',
    styleUrls: ['./type-safe-form-using-pkg.component.scss']
})
export class TypeSafeFormUsingPkgComponent implements OnInit {
    public personForm: IFormGroup<Employee>;
    constructor(public formService: FormService) {
        this.personForm = this.formService.getEmployeeForm();
    }

    ngOnInit(): void {}
}
