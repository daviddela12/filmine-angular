import { Component, Inject, OnInit } from '@angular/core';
import PDisplayMessages from '../../domain/ports/inbound/p-display-messages';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  constructor(@Inject('PDisplayMessages') public messagesDisplayer: PDisplayMessages) { }

  ngOnInit(): void {
  }

  clearMessages() {
    this.messagesDisplayer.askMessagesClear();
  }

}
