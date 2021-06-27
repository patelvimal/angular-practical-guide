import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
    selectedFile: any = null;
    constructor() {}

    ngOnInit(): void {}

    selectFile(event: any) {
        this.selectedFile = event.target.files;
        console.log(this.selectedFile);
    }
}
