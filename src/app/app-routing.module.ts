import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { Csc121Component } from './courses/csc121/csc121.component';
import { Csc122Component } from './courses/csc122/csc122.component';
import { Csc231Component } from './courses/csc231/csc231.component';
import { Csc232Component } from './courses/csc232/csc232.component';
import { Csc233Component } from './courses/csc233/csc233.component';
import { Csc240Component } from './courses/csc240/csc240.component';
import { Csc340Component } from './courses/csc340/csc340.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const appRoute: Routes =[
  {path: '',redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home',component: HomeComponent},
  {path: 'Contact',component: ContactComponent},
  {path: 'Courses',component: CoursesComponent},
  {path:'Courses',children:[
    {path:'Course/101' ,component:  Csc121Component},
    {path: 'Course/102', component: Csc122Component},
    {path: 'Course/103',component:  Csc231Component},
    {path: 'Course/104',component:  Csc232Component},
    {path: 'Course/105',component:  Csc233Component},
    {path: 'Course/106',component:  Csc240Component},
    {path: 'Course/107',component:  Csc340Component}
  ]},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
