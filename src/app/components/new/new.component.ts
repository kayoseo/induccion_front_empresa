import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [UserService]
})

export class NewComponent implements OnInit {
  user: User;
  constructor(private _userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    /* Para este ejemplo crearemos un usuario estatico
    ya que lo importante es como se pasan por parametro 
    los datos*/
    this.user.name="juan";
    this.user.job="informático";
    this.createUser(this.user);
  }

  //La funcion recibe por parametro un objeto de tipo User
  createUser(obj:User) { 
    this._userService.createUser(obj).subscribe(
      (response) => {
        this.user = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
