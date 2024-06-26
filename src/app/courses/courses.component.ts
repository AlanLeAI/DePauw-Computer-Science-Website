import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  courses: { id: number; name: string; author: string; credit: number; code: string; image: string; description: string; }[] = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    this.coursesService.getAllCourses().then((data: { id: number; name: string; author: string; credit: number; code: string; image: string; description: string; }[])=>{
      this.courses = data;
    })
    // this.courses = this.route.snapshot.data['courses'];


  }


}


