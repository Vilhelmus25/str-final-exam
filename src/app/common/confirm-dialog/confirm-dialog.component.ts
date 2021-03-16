import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  message: any;
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): any {
    this.modalService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

}
