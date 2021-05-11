import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { AddEditContatoComponent } from './contato/add-edit-contato/add-edit-contato.component';
import { ShowContatoComponent } from './contato/show-contato/show-contato.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    AddEditContatoComponent,
    ShowContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
