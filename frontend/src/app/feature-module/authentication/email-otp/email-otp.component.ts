import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../backend-services/user/auth.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-email-otp',
  templateUrl: './email-otp.component.html',
  styleUrls: ['./email-otp.component.css']
})
export class EmailOtpComponent implements OnInit {
  public routes = routes;
  public verificationCode = [];
  public oneTimePassword = {
    data1: "",
    data2: "",
    data3: "",
    data4: "",
    data5: "",
    data6: ""
  };
  public email: string = ''; // Store the email
  public error: string = ''; // Store error messages

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    // Retrieve the email from query parameters
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';
      console.log('Email retrieved:', this.email); // Debug email
    });
  }

  public ValueChanged(data: string, box: string): void {
    if (box == 'digit-1' && data.length > 0) {
      document.getElementById('digit-2')?.focus();
    } else if (box == 'digit-2' && data.length > 0) {
      document.getElementById('digit-3')?.focus();
    } else if (box == 'digit-3' && data.length > 0) {
      document.getElementById('digit-4')?.focus();
    } else if (box == 'digit-4' && data.length > 0) {
      document.getElementById('digit-5')?.focus();
    } else if (box == 'digit-5' && data.length > 0) {
      document.getElementById('digit-6')?.focus();
    }
  }

  public tiggerBackspace(data: string, box: string) {
    let StringyfyData = data ? data.toString() : null;
    if (box == 'digit-6' && StringyfyData == null) {
      document.getElementById('digit-5')?.focus();
    } else if (box == 'digit-5' && StringyfyData == null) {
      document.getElementById('digit-4')?.focus();
    } else if (box == 'digit-4' && StringyfyData == null) {
      document.getElementById('digit-3')?.focus();
    } else if (box == 'digit-3' && StringyfyData == null) {
      document.getElementById('digit-2')?.focus();
    } else if (box == 'digit-2' && StringyfyData == null) {
      document.getElementById('digit-1')?.focus();
    }
  }

  public verifyOtp() {
    const otp = `${this.oneTimePassword.data1}${this.oneTimePassword.data2}${this.oneTimePassword.data3}${this.oneTimePassword.data4}${this.oneTimePassword.data5}${this.oneTimePassword.data6}`;
    console.log('Verifying OTP:', otp); // Debug OTP
    this.authService.verifyOTP(this.email, otp).subscribe({
      next: (response: string) => {
        console.log('Response received:', response); // Debug response
        if (response === 'OTP verified successfully') {
          console.log('OTP verified successfully');
          this.router.navigate([routes.resetPassword], { queryParams: { email: this.email } }); // Navigate to reset password
        } else {
          this.error = 'Unexpected response from the server.';
        }
      },
      error: (err: any) => {
        console.error('Error verifying OTP:', err); // Debug error
        this.error = 'Invalid OTP. Please try again.';
      }
    });
  }
}
