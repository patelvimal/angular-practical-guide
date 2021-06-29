import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadComponent } from './file-upload.component';
import { ApiService } from '../services/api.service';

describe('FileUploadComponent', () => {
    let component: FileUploadComponent;
    let fixture: ComponentFixture<FileUploadComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FileUploadComponent],
            providers: [{ provide: ApiService, useValue: {} }]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FileUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
