import { TestBed } from '@angular/core/testing';

import { FormService } from './form.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormService', () => {
    let service: FormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule]
        });
        service = TestBed.inject(FormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
