import { Injectable } from '@angular/core';
import PManageMessages from 'src/app/domain/ports/outbound/p-manage-messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesAdapterService implements PManageMessages {

  messages: string[] = [];

  constructor() { }

  addMessage(message: string): void {
    this.messages.push(message);
  }

  removeMessage(): void {
    this.messages.pop();
  }

  clearMessages(): void {
    this.messages = [];
  }
}
