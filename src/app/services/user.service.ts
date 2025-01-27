import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserModel[] = [
    { id: 1, name: 'Juan', phone: '123456789' },
    { id: 2, name: 'Ana', phone: '987654321' }
  ];

  constructor() { }

  get(): UserModel[] {
    return this.users;
  }

  add(user: UserModel): UserModel {
    this.users.push(user);
    return user;
  }

  update(id: number, updatedUser: UserModel): UserModel {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      return updatedUser;
    }
    return null;
  }

  delete(id: number): UserModel {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      return this.users.splice(index, 1)[0];
    }
    return null;
  }

  linkModels(idUser: number, idBook: number): any {
    // Implementa la lógica de vinculación entre Usuario y Libro
  }
}
