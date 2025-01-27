import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: UserModel;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.user = { ...this.userService.get().find(u => u.id === userId) };
  }

  updateUser() {
    this.userService.update(this.user.id, this.user);
    this.router.navigate(['/list']);
  }
}
