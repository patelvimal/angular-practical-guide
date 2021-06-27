import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
        }
    ]
})
export class FileUploadComponent implements OnInit, ControlValueAccessor {
    selectedFile: any = null;
    fileName: string = '';

    onChange = (name: string) => {};
    onTouched = () => {};

    constructor(public apiService: ApiService) {}

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

        this.apiService.uploadFiles(this.selectedFile).subscribe((response) => {
            this.fileName = fileName;
            this.onChange(fileName);
        });
    }

    onFileClick(element: any) {
        element.click();
    }
}
