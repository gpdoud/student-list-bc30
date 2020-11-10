import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnStyle: string = "btn btn-primary";
  students: any[] = null;
  studentCollection: any[] = [
    { name: "Tonya", favNumber: 743747, favColor: "orange" },
    { name: "Kali", favNumber: 3847387483, favColor: "blue" },
    { name: "Hung", favNumber: 9203498203, favColor: "red" },
    { name: "Jack", favNumber: 2, favColor: "yellow" },
    { name: "Mark", favNumber: 3884, favColor: "green" },
    { name: "Christian", favNumber: 384858, favColor: "blue" },
    { name: "Jonathan", favNumber: 488494, favColor: "Buffalo Blue" },
    { name: "Manami", favNumber: 69373, favColor: "orange" },
    { name: "Tracy", favNumber: 283884, favColor: "red" },
    { name: "Elena", favNumber: 8766, favColor: "green" },
    { name: "Marc", favNumber: 992772, favColor: "purple" }
  ];

  title = 'student-list';

  changeColor(): void {
    this.btnStyle = "btn btn-danger";
  }
  getStudents(): void {
    this.students = this.studentCollection;
  }

  constructor(
    private usersvc: UserService
  ) {
    this.usersvc.list();
  }

  ngOnInit(): void {

  }
}
