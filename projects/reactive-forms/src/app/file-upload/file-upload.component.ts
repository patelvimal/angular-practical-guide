import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator
} from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: FileUploadComponent,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: FileUploadComponent,
            multi: true
        }
    ]
})
export class FileUploadComponent implements OnInit, ControlValueAccessor, Validator {
    selectedFile: any = null;
    fileName: string = '';
    fileStatus: boolean = false;

    onChange = (name: string) => {};
    onTouched = () => {};
    onValidationChange = () => {};

    constructor(public apiService: ApiService) {}

    validate(control: AbstractControl): ValidationErrors | null {
        if (this.fileStatus) {
            return null;
        } else {
            return {
                fileUploadStatus: false
            };
        }
    }

    registerOnValidatorChange?(fn: () => void) {
        this.onValidationChange = fn;
    }

    writeValue(value: any): void {
        this.fileName = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    ngOnInit(): void {}

    selectFile(event: any) {
        this.selectedFile = event.target.files;
        //console.log(this.selectedFile);
        //this.writeValue(this.selectedFile[0].name);
        const fileName: string = this.selectedFile[0].name;

        this.apiService.uploadFiles(this.selectedFile).subscribe(
            (response) => {
                this.fileName = fileName;
                this.fileStatus = true;
                this.onChange(fileName);
                this.onValidationChange();
            },
            (error: any) => {
                this.fileName = '';
                this.fileStatus = false;
                this.onChange('');
                this.onValidationChange();
            }
        );
    }

    onFileClick(element: any) {
        element.click();
    }
}
