import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6InNhZmFAZXNwcml0LnRuIiwiZXhwIjoxNzQ0OTA1NzYyfQ.KKO2wuPwUWexakOBFMjw8e58IwhUrqwR2UPR_a6zVCQ';

  getToken(): string {
    return this.token;
  }}
