import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = []

  constructor() { }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message)
  }

  getAllMessages() {
    return this.messages
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1)
  }

}
