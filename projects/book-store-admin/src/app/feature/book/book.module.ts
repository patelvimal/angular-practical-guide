import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ListComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    exports: [ListComponent]
})
export class BookModule {}
