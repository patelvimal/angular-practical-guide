import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControlComponent } from './components/form-control/form-control.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';

@NgModule({
    declarations: [FormControlComponent, ValidationErrorComponent],
    imports: [CommonModule, BrowserModule],
    providers: [],
    exports: [FormControlComponent, ValidationErrorComponent]
})
export class CoreModule {}
