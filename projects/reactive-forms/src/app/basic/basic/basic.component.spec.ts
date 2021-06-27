import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './basic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '@reactive-forms/services/form.service';
import { MaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BasicComponent', () => {
    let component: BasicComponent;
    let fixture: ComponentFixture<BasicComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
            declarations: [BasicComponent],
            providers: [FormService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
