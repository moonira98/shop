import { MyFirstService } from './../services/my-first.service';
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from "../../../node_modules/@angular/common/index";
import { MessageDetailsComponent } from "../message-details/message-details.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-first',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, MessageDetailsComponent],
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.scss'
})
export class MyFirstComponent {
    name: string = ''
    email: string = ''
    message: string = ''
    isSubmitted: boolean = false
    messages: Array<any> = []
    MyFirstService = inject(MyFirstService)

    constructor () {
      this.messages = this.MyFirstService.getAllMessages()
      this.isSubmitted = this.messages.length > 0
    }

    onSubmit() {
      this.isSubmitted = true
      this.MyFirstService.insert({
        'name': this.name,
        'email': this.email,
        'message': this.message
      })
      console.log(this.messages)
    }

    deleteMessage(index: number) {
      this.MyFirstService.deleteMessage(index)
    }

}
