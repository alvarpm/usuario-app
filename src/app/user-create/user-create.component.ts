import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  newUser: UserModel = { id: 0, name: '', phone: '' };

  constructor(private userService: UserService) {}

  addUser() {
    if (this.newUser.name && this.newUser.phone) {
      this.userService.add(this.newUser);
      alert('Usuario creado con éxito');
    }
  }
}
