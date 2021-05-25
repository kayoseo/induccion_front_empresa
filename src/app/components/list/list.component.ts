import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService]
})
export class ListComponent implements OnInit {
  users: User[];
  constructor(private _userService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this._userService.getUsers(1).subscribe(
      (response) => {
        this.users = response.data;
      },
      (error) => {
        console.log(error);
      });
  }

  deleteUser(id, index) {
    this._userService.deleteUser(id).subscribe(
      (response) => {
        /*Una vez se ha eliminado en el back 
        procedemos a eliminarlo directamente del array para evitar
        tener que llamar nuevamente al metodo get  */
        this.users.splice(index, 1);
      },
      (error) => { console.log(error) });
  }

}
