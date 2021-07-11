import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { BookModule } from './feature/book/book.module';

@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, BrowserModule, AppRoutingModule, BookModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
