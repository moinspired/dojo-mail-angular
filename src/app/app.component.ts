import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dojos = [
    {
      email: "bil@gmail.com",
      importance: true,
      subject: "New Windows",
      content: "Windows XI will launch in your 2100"
    },
    {
      email: "ada@gmail",
      importance: true,
      subject: "Programming",
      content: "Enchantress of Nombers"
    },
    {
      email: "john@gmail",
      importance: false,
      subject: "Updated Algo",
      content: "New algorithm for shadow volums"
    },
   {
     email: "gabe@gmail",
     importance: false,
     subject: "HL3!",
     content: "Just kidding..."
   }
  ]
}
