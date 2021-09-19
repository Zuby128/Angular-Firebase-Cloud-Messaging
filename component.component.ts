import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';


@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent implements OnInit {

  title = 'push-notification';
  message;

  constructor(
    private messagingService: MessagingService
    ) { }

  ngOnInit(): void {

    this.messagingService.askForPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage

  }



}
