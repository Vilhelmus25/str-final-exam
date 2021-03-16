import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { ModalService } from 'src/app/service/modal.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
  textPhrase: string = '';
  key: string = 'name';
  columnKey: string = '';

  constructor(
    private userService: UserService, private modalService: ModalService,
  ) { }

  ngOnInit(): void {
  }

  deleteUser(id: number): void {
    this.userService.remove(id).subscribe(() => {
      this.userService.getAll();
      location.reload();
    }
    );
  }
  onConfirmDelete(id: number): void {
    this.modalService.confirmThis(
      `Are you sure to DELETE the #${id} User?`, () => {
        this.deleteUser(id);
      }, () => { })
  }



  onColumnSelect(inputKey: string): void {
    this.columnKey = inputKey;
  }

}
