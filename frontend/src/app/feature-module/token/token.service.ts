import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6InNhZmFAZXNwcml0LnRuIiwiZXhwIjoxNzQ1MDkyNTAwfQ.YOWa0qq8DM6NmGI8Nq1QWh2JigYC-PZW2AEIk9rrSc0';

  getToken(): string {
    return this.token;
  }}
