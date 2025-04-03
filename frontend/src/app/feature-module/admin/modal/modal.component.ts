import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public passwordClass = false;
  
  togglePassword() {
    this.passwordClass = !this.passwordClass;
    console.log('sss',this.passwordClass);
  }
}
