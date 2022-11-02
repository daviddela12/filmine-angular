import { Inject, Injectable } from '@angular/core';
import PDisplayMessages from '../ports/p-display-messages';
import PManageMessages from '../ports/p-manage-messages';

@Injectable()
export class MessagesDisplayerService implements PDisplayMessages {

  messages: string[] = [];

  constructor( @Inject('IManageMessages') private _manageMessages: PManageMessages) {
    this.messages = this._manageMessages.messages;
   }
 
  askMessagesClear(): void {
    this._manageMessages.clearMessages();
    this.messages = this._manageMessages.messages;
  }
}
