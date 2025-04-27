import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.css',
  // standalone: true,
  // imports: [CommonModule],
})
export class AIComponent {
  @Input() plannedMeal: any;

  selectedImage: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  result: any = null;
  loading: boolean = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = reader.result;
      };
      if (this.selectedImage) {
        reader.readAsDataURL(this.selectedImage);
      }
    }
  }

  submitImage(): void {
    if (!this.previewUrl) {
      this.error = "No image selected!";
      return;
    }

    this.loading = true;
    this.error = null;
    this.result = null;

    const base64Image = (this.previewUrl as string).split(',')[1];

    this.http.post('http://localhost:8000/process-image/', { image: base64Image })
      .subscribe({
        next: (response) => {
          this.result = response;
          this.loading = false;
        },
        error: (err) => {
          this.error = err.error.detail || 'Error processing image';
          this.loading = false;
        }
      });
  }
}
