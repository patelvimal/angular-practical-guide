import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@reactive-forms/material.module';
import { FormService } from '@reactive-forms/services/form.service';

import { TypeSafeFormComponent } from './type-safe-form.component';

describe('TypeSafeFormComponent', () => {
    let component: TypeSafeFormComponent;
    let fixture: ComponentFixture<TypeSafeFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                MaterialModule,
                BrowserAnimationsModule,
                HttpClientTestingModule
            ],
            declarations: [TypeSafeFormComponent],
            providers: [FormService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TypeSafeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
