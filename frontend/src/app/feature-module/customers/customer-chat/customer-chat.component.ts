import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-customer-chat',
  templateUrl: './customer-chat.component.html',
  styleUrls: ['./customer-chat.component.css']
})
export class CustomerChatComponent {
  public routes = routes;
  toggle = false;
  chat = false;

  toggleClass(){
    this.toggle = !this.toggle
  }
  openChat(){
    this.chat = !this.chat
  }
}
