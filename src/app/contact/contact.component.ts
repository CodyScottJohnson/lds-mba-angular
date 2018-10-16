import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import{DialogComponent} from '../ui/dialog/dialog.component';
import{ChatComponent} from '../ui/chat/chat.component';
import{SubscribeComponent} from '../ui/subscribe/subscribe.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {

      maxWidth:"500px",
      panelClass: ["myCustomClass"],
      data: {},
      
    });
  }
  openChat(): void {
    const dialogRef = this.dialog.open(ChatComponent, {

      maxWidth:"500px",
      panelClass: ["myCustomClass"],
      data: {},
      
    });
  }
  openSubscribe(): void {
    const dialogRef = this.dialog.open(SubscribeComponent, {

      maxWidth:"500px",
      panelClass: ["myCustomClass"],
      data: {},
      
    });
  }
}
