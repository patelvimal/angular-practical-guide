import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '@reactive-forms/services/form.service';

@Component({
    selector: 'app-type-safe-form',
    templateUrl: './type-safe-form.component.html',
    styleUrls: ['./type-safe-form.component.scss']
})
export class TypeSafeFormComponent implements OnInit {
    public personForm: FormGroup = new FormGroup({});

    constructor(public formService: FormService) {}

    ngOnInit(): void {
        this.personForm = this.formService.getBasicForm();
    }
}
