import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routes } from 'src/app/shared/routes/routes';
import { PoseService } from '../../backend-services/ai/pose-service.service';


interface data {
  value: string;
}

@Component({
  selector: 'app-pose-ai',
  templateUrl: './pose-ai.component.html',
  styleUrls: ['./pose-ai.component.css'],
})
export class PoseAiComponent {
  selectedPose: string | null = null;
  videoUrl: string | null = null;

  constructor(private poseService: PoseService) {}

  onSubmit() {
    if (this.selectedPose) {
      this.videoUrl = this.poseService.getVideoFeed(this.selectedPose);
    }
  }
}