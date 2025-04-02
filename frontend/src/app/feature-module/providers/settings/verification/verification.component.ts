import { Component, ElementRef, ViewChild, } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  public routes = routes
  public verificationCode = [];
  public oneTimePassword = {
    data1: '',
    data2: '',
    data3: '',
    data4: '',
  };
  public ValueChanged(data: string, box: string): void {
    if (box == 'digit-1' && data.length > 0) {
      document.getElementById('digit-2')?.focus();
    } else if (box == 'digit-2' && data.length > 0) {
      document.getElementById('digit-3')?.focus();
    } else if (box == 'digit-3' && data.length > 0) {
      document.getElementById('digit-4')?.focus();
    } else {
      return;
    }
  }
  public tiggerBackspace(data: string, box: string) {
    let StringyfyData;
    if (data) {
      StringyfyData = data.toString();
    } else {
      StringyfyData = null;
    }
    if (box == 'digit-4' && StringyfyData == null) {
      document.getElementById('digit-3')?.focus();
    } else if (box == 'digit-3' && StringyfyData == null) {
      document.getElementById('digit-2')?.focus();
    } else if (box == 'digit-2' && StringyfyData == null) {
      document.getElementById('digit-1')?.focus();
    }
  }
  @ViewChild('successModal') successModal!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit(): void {
    // Get the modal element
    const modalElement = this.successModal.nativeElement;

    // Listen to the hidden.bs.modal event
    modalElement.addEventListener('hidden.bs.modal', () => {
      // Get the backdrop element
      const backdropElement = this.modalBackdrop.nativeElement;

      // Remove the "modal-backdrop" class
      backdropElement.classList.remove('modal-backdrop', 'fade', 'show');
    });
  }
  public selectedValue1 = '';
  selectedList1: data[] = [
    {value: 'Select'},
    {value: 'Passport'},
    {value: 'Visa'},
];
}


