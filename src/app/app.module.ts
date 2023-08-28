import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CoursesService } from './Services/courses.service';
import { Csc121Component } from './courses/csc121/csc121.component';
import { Csc122Component } from './courses/csc122/csc122.component';
import { Csc231Component } from './courses/csc231/csc231.component';
import { Csc232Component } from './courses/csc232/csc232.component';
import { Csc233Component } from './courses/csc233/csc233.component';
import { Csc240Component } from './courses/csc240/csc240.component';
import { Csc340Component } from './courses/csc340/csc340.component';
import { FormsModule, NgModel } from '@angular/forms';
import { LinkedListComponent } from './courses/csc122/linked-list/linked-list.component';
import { BubbleSortComponent } from './courses/csc121/bubble-sort/bubble-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsertionSortComponent } from './courses/csc121/insertion-sort/insertion-sort.component';
import { SelectionSortComponent } from './courses/csc121/selection-sort/selection-sort.component';
// import { CaesarCipherComponent } from './courses/csc340/caesar-cipher/caesar-cipher.component';
// import { ContentComponent } from './courses/csc340/content/content.component';
import { HashmapComponent } from './courses/csc122/hashmap/hashmap.component';
import { RsaComponent } from './courses/csc340/rsa/rsa.component';
import { EccComponent } from './courses/csc340/ecc/ecc.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CoursesComponent,
    ErrorComponent,
    Csc121Component,
    Csc122Component,
    Csc231Component,
    Csc232Component,
    Csc233Component,
    Csc240Component,
    Csc340Component,
    LinkedListComponent,
    BubbleSortComponent,
    InsertionSortComponent,
    SelectionSortComponent,
    FooterComponent,
    // CaesarCipherComponent,
    // ContentComponent,
    HashmapComponent,
    RsaComponent,
    RsaComponent,
    EccComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
