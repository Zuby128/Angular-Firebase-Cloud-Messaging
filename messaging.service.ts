import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'

@Injectable()

export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private afMessaging: AngularFireMessaging) {

  }

  askForPermission() {
    this.afMessaging.requestPermission
        .subscribe(
            () => {
                console.log('Permission granted!');
                this.afMessaging.requestToken.subscribe((res) => {
                    console.log(res);
                }, (err) => console.log(err))
            },
            (error) => { console.error(error); },
        );
  }

  receiveMessage() {
    this.afMessaging.messages.subscribe(
      (payload) => {
      console.log("new message received. ", payload);
      this.currentMessage.next(payload);
      }
    )
  }

}
