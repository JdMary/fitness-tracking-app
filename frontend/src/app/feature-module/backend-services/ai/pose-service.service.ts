import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PoseService {
  private baseUrl = 'http://localhost:5000'; // Replace with your Flask server URL

  constructor(private http: HttpClient) {}

  getVideoFeed(subject: string) {
    return `${this.baseUrl}/video_feed_${subject}`;
  }
}