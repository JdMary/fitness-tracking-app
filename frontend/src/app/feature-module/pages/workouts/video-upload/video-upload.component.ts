import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrl: './video-upload.component.css'
})
export class VideoUploadComponent {
  progress: number = 0;
  videoUrl: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'unsigned-upload'); // your unsigned preset
      formData.append('resource_type', 'video');

      this.http.post<any>(
        'https://api.cloudinary.com/v1_1/dr4e5myfc/video/upload',
        formData,
        {
          reportProgress: true,
          observe: 'events'
        }
      ).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((event.loaded / (event.total || 1)) * 100);
        } else if (event.type === HttpEventType.Response) {
          this.videoUrl = event.body.secure_url;
          console.log('Video uploaded:', this.videoUrl);
        }
      }, error => {
        console.error('Upload error:', error);
      });
    } else {
      alert('Please select a video file.');
    }
  }

}
