import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerAchievementService } from '../../../../shared/services/customer-achievement.service';
import { Achievement } from '../models/achievement.model';

@Component({
  selector: 'app-customer-achievement-details',
  templateUrl: './customer-achievement-details.component.html',
  styleUrls: ['./customer-achievement-details.component.css']
})
export class CustomerAchievementDetailsComponent implements OnInit {

  achievement?: Achievement;

  constructor(
    private route: ActivatedRoute,
    private achievementService: CustomerAchievementService
  ) {}

  ngOnInit(): void {
    const achieveId = this.route.snapshot.paramMap.get('achieveId');
    if (achieveId) {
      this.achievementService.getAchievementById(achieveId).subscribe({
        next: (data) => this.achievement = data,
        error: (error) => console.error('Error loading achievement:', error)
      });
    }
  }}