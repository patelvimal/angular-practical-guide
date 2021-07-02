import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@reactive-forms/material.module';
import { FormService } from '@reactive-forms/services/form.service';

import { TypeSafeFormUsingPkgComponent } from './type-safe-form-using-pkg.component';

describe('TypeSafeFormUsingPkgComponent', () => {
    let component: TypeSafeFormUsingPkgComponent;
    let fixture: ComponentFixture<TypeSafeFormUsingPkgComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                MaterialModule,
                BrowserAnimationsModule,
                HttpClientTestingModule
            ],
            declarations: [TypeSafeFormUsingPkgComponent],
            providers: [FormService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TypeSafeFormUsingPkgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
