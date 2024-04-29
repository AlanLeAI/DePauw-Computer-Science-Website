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
import { CaesarCipherComponent } from './courses/csc340/caesar-cipher/caesar-cipher.component';
import { ForloopComponent } from './courses/csc121/forloop/forloop.component';
import { DuplicateComponent } from './courses/csc121/duplicate/duplicate.component';
import { MissingComponent } from './courses/csc121/missing/missing.component';
import { CareerComponent } from './career/career.component';
import { WindowRefService } from './courses/csc340/WindowRefService';
import { IllustratedComponent } from './courses/csc340/illustrated/illustrated.component';
import { BstComponent } from './courses/csc122/bst/bst.component';
import { Arr2dComponent } from './courses/csc122/arr2d/arr2d.component';
import { DatatypeComponent } from './courses/csc121/datatype/datatype.component';
import { OperatorsComponent } from './courses/csc121/operators/operators.component';
import { ClassobjectComponent } from './courses/csc121/classobject/classobject.component';
import { Array1dComponent } from './courses/csc121/array1d/array1d.component';
import { PracticeComponent } from './courses/csc121/practice/practice.component';
import { PublickeyencComponent } from './courses/csc340/publickeyenc/publickeyenc.component';
import { StackComponent } from './courses/csc122/stack/stack.component';
import { QueueComponent } from './courses/csc122/queue/queue.component';
import { DoublylinkedlistComponent } from './courses/csc122/doublylinkedlist/doublylinkedlist.component';
import { DfsbfsComponent } from './courses/csc122/dfsbfs/dfsbfs.component';


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
    CaesarCipherComponent,
    ForloopComponent,
    DuplicateComponent,
    MissingComponent,
    CareerComponent,
    IllustratedComponent,
    BstComponent,
    Arr2dComponent,
    DatatypeComponent,
    OperatorsComponent,
    ClassobjectComponent,
    Array1dComponent,
    PracticeComponent,
    PublickeyencComponent,
    StackComponent,
    QueueComponent,
    DoublylinkedlistComponent,
    DfsbfsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CoursesService, WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
