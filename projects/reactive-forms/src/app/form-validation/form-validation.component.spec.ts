import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@reactive-forms/material.module';
import { FormService } from '@reactive-forms/services/form.service';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { FormValidationComponent } from './form-validation.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';

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
                BrowserAnimationsModule,
                HttpClientTestingModule
            ],
            declarations: [FormValidationComponent, FileUploadComponent],
            providers: [FormService]
        })
            .overrideComponent(FileUploadComponent, {
                set: {
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: FileUploadComponent,
                            multi: true
                        }
                    ]
                }
            })
            .compileComponents();
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
