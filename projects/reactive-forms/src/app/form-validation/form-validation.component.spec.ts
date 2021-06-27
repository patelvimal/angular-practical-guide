import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@reactive-forms/material.module';
import { FormService } from '@reactive-forms/services/form.service';

import { FormValidationComponent } from './form-validation.component';

describe('FormValidationComponent', () => {
    let component: FormValidationComponent;
    let fixture: ComponentFixture<FormValidationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CommonModule,
                BrowserModule,
                ReactiveFormsModule,
                MaterialModule,
                BrowserAnimationsModule
            ],
            declarations: [FormValidationComponent],
            providers: [FormService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormValidationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
