import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic/basic.component';
import { MaterialModule } from './material.module';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { TypeSafeFormComponent } from './type-safe-form/type-safe-form.component';
import { TypeSafeFormUsingPkgComponent } from './type-safe-form-using-pkg/type-safe-form-using-pkg.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        FormValidationComponent,
        FileUploadComponent,
        TypeSafeFormComponent,
        TypeSafeFormUsingPkgComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
