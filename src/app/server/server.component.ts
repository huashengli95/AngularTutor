import { Component } from '@angular/core';
import { Student } from '../../shared/Student';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})

export class ServerComponent {
  ServerID = 10;
  serverStatus = 'online';
  counter = 0;
  userName: string;
  isLogin = false;
  Students: Student[] = [new Student('huashengli', 'software'),
                         new Student('fenggao', 'ECE'),
                         new Student('Boxingliu', 'game design')];

  getServerStatus () {
    return this.serverStatus;
  }
  countplus () {
    return this.counter++;
  }

  reset () {
    return this.counter = 0;
  }

  onUpdateinput (event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    console.log(this.userName);
  }

  login () {
    this.isLogin = true;
  }

  logout () {
    this.isLogin = false;
  }
}

