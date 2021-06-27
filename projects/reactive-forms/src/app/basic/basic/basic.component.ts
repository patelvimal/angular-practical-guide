import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '@reactive-forms/services/form.service';

@Component({
    selector: 'app-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
    public personForm: FormGroup = new FormGroup({});

    constructor(public formService: FormService) {}

    ngOnInit(): void {
        this.personForm = this.formService.getBasicForm();
    }
}
