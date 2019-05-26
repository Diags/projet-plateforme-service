import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueService } from './catalogue.service';
import { UsersComponent } from './users/users.component';
import { ProfessionsDetailComponent } from './professions-detail/professions-detail.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueDetailComponent } from './catalogue-detail/catalogue-detail.component';
import { DevisFormComponent } from './devis-form/devis-form.component';
import { StarsComponent } from './stars/stars.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import { ProfessionelComponent } from './professionel/professionel.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProfessionsDetailComponent,
    CatalogueComponent,
    CatalogueDetailComponent,
    DevisFormComponent,
    StarsComponent,
    ContactComponent,
    ProfessionelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CatalogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
