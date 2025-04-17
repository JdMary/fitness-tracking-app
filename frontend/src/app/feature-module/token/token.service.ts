import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6InNhZmFAZXNwcml0LnRuIiwiZXhwIjoxNzQ0OTE1MjkzfQ.4hIwk_FRGcQ1gvQ9kTEgBDAPlxHwhGw99uPFgZXxqMo';

  getToken(): string {
    return this.token;
  }}
