import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CustomerRewardService } from '../../../../shared/services/customer-reward.service';
import { Reward } from '../models/reward.model';

@Component({
  selector: 'app-customer-reward',

  templateUrl: './customer-reward.component.html',
  styleUrls: ['./customer-reward.component.css']
})
export class CustomerRewardComponent implements OnInit {

  rewards: Reward[] = [];

  constructor(private rewardService: CustomerRewardService) {}

  ngOnInit(): void {
    console.log("🟢 ngOnInit déclenché !");
    this.loadRewards();
  }
  copyCode(code: string): void {
    navigator.clipboard.writeText(code).then(() => {
     
    });
  }
  

  loadRewards(): void {
    console.log("🔁 Appel de loadRewards()");
    this.rewardService.getMyRewards().subscribe({
      next: (data) => {
        console.log("✅ Récompenses récupérées :", data);
        this.rewards = data;
      },
      error: (err) => {
        console.error("❌ Erreur lors de la récupération des rewards :", err);
      }
    });
  }
}
