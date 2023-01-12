import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { NoteComponent } from './note/note.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, MainComponent, NoteComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
