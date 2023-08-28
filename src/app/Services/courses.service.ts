import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses = [
    { id:101, name:'Computer Science I', author: 'John Heikela', credit: 1, code: 'CSC 121', image:'./assets/courses/121.jpeg',
      description: 'This is an introductory course in which problem solving and algorithm development are studied by considering computer science topics, such as computer graphics, graphical user interfaces, modeling and simulation, artificial intelligence and information management systems.\
      Interesting and relevant programming assignments related to these topics are written in a high-level programming language that supports objects. Additional assignments utilize writing and data analysis to reinforce central course concepts and to address related areas of computing, such as ethics, history and the meaning of intelligence. \
      The course meets three hours in class and two hours in laboratory (3-2). Offered each semester.'
    },
    { id:102, name:'Data Structure', author: 'Mark Vought', credit: 1, code: 'CSC 122',  image:'./assets/courses/122.jpg',
      description: 'This course builds on CSC 121 and includes programming topics such as sorting and searching, sets, recursion and dynamic data types. \
      Additional concepts involve data type abstraction and implementation developed through studying structures such as lists, stacks, queues, hash tables and binary search trees. \
      The course emphasizes object oriented implementation of these structures. Students learn tools for algorithm analysis and explore the use of standard libraries. \
      The concept of tradeoffs (i.e., time vs. space, iteration vs. recursion, static vs. dynamic) recurs as a theme throughout the course.'
    },
    
    { id:107, name:'Web Programming And Cybersecurity', author: 'Merry Smith', credit: 1, code: 'CSC 340', image:'./assets/courses/340.jpeg',
      description: 'This course covers some fundamental networking concepts, web application development and web application security. Topics covered include: introduction to the Internet, World Wide Web and internet protocols, markup languages, client side scripting, server side scripting, database concepts, encryption/decryption, web application vulnerabilities and how to build secure web applications.'
    },
    { id:108, name:'Graphics', author: 'Steve Smith', credit: 1, code: 'CSC 350', image:'./assets/courses/350.jpg',
      description: 'his course is an introduction to the concepts, techniques, algorithms and implementation of computer graphics. Topics include moving and drawing lines in absolute and relative coordinates, transformations, windowing, clipping, projections, perspective, polygon filling, hidden surface techniques and a variety of applications, including graphical user interfaces and menuing systems. '
    },
    { id:103, name:'Computer Systems', author: 'Steve Smith', credit: 1, code: 'CSC 231', image:'./assets/courses/231.jpeg',
      description: 'This is an introduction to the study of computer hardware and its relationship to software. \
      Topics include information representation, architecture of the central processing unit, memory organization and hierarchy, \
      assembly language and machine level representation of programs, interactions and relationships among system components (hardware, operating systems, compilers, network environments), and the impact of architectural decisions on performance.'
    },
    { id:104, name:'Object Oriented Software Development', author: 'Steve Smith', credit: 1, code: 'CSC 232',  image:'./assets/courses/232.jpeg',
      description: 'A study of fundamental techniques and tools for managing software development projects, together with relevant professional and ethical issues. Topics include methodologies such as UML diagrams for software specification and design, documentation standards, and tools for testing, code management, analysis, and debugging. \
      Object oriented programming techniques such as inheritance and polymorphism are emphasized. Students will develop skills in individual and team software development through extensive practice designing and implementing object oriented software systems. \
      In addition, students gain experience reading, documenting, presenting and critiquing such systems.'
    },
    { id:105, name:'Foundation Of Computation', author: 'John Heikela', credit: 1, code: 'CSC 233',  image:'./assets/courses/233.jpg',
      description: 'This course explores the theoretical foundations of computation at various levels of abstraction. Specific topics include graph theory and related algorithms; \
      functional programming with an emphasis on recursion and recurrences; \
      the description of languages using formalisms such as regular expressions, finite state machines, and context free grammars; and digital logic and its application to sequential and combinational circuits. '
    },
    { id:106, name:'Writing In Computer Science', author: 'Mark Vought', credit: 0.5, code: 'CSC 240', image:'./assets/courses/240.jpeg',
      description: 'In this course students learn to communicate technical and non-technical information about computer science to technical and non-technical audiences. \
      This writing includes communication with users (e.g., user manuals), the general public (e.g., op-ed pieces related to technical issues), and other non-technical audiences (e.g., legislators, potential investors, customers). \
      Students also develop a project proposal document. Some of the writing in this course deals with ethical and social issues. '
    },
    // { id:109, name:'Data Mining', author: 'Steve Smith', credit: 1.0, code: 'CSC 370',  image:'./assets/courses/370.jpeg',
    //   description: 'Data mining is the effort to reach useful conclusions from data by building interpretive and predictive computational models. This course prepares students to do this through hands-on exploration of data preparation, and model development, tuning, and validation. This is done in the context of various algorithms such as gradient-descent, ensemble methods, and linear regression. Coursework includes multiple significant programming projects and a large final project.'
    // }
  ]


  getAllCourses(): any{
    const courseList = new Promise((resolve, reject)=>{
      setTimeout(()=> {
        resolve(this.courses)
      }, 5000)
    })

    return courseList
  }
}

