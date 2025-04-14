import { Component, OnInit } from '@angular/core';
import { CustomerAchievementService } from './customer-achievement.service';
import { Achievement } from './achievement.model';

@Component({
  selector: 'app-customer-achievements',
  templateUrl: './customer-achievements.component.html',
  styleUrls: ['./customer-achievements.component.css']
})
export class CustomerAchievementsComponent implements OnInit {

  achievements: Achievement[] = [];
  filteredAchievements: Achievement[] = [];

  searchTerm: string = '';
  selectedSort: string = 'XP Décroissant';
  selectedProgress: string = '';
  
  
  sortOptions = ['XP Croissant', 'XP Décroissant'];

  progressOptions = [
    { label: 'All', value: '' },
    { label: '0%', value: '0' },
    { label: '50%', value: '50' },
    { label: '100%', value: '100' },
    { label: 'Less than 50%', value: 'lt50' },
    { label: 'Greater than 50%', value: 'gt50' }
  ];

  constructor(private achievementService: CustomerAchievementService) { }

  ngOnInit(): void {
    this.loadAchievements();
  }

  loadAchievements(): void {
    this.achievementService.getAllAchievements().subscribe({
      next: (data) => {
        this.achievements = data;
        this.filteredAchievements = data;
        this.applyFilters();
      },
      error: (error) => console.error('Error loading achievements:', error)
    });
  }

  applySearch(): void {
    this.applyFilters();
  }

  applyProgressFilter(progress: string): void {
    this.selectedProgress = progress;
    this.applyFilters();
  }

  applySort(sortType: string): void {
    this.selectedSort = sortType;
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.achievements];

    // Filtre recherche
    if (this.searchTerm.trim() !== '') {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(achievement =>
        achievement.title.toLowerCase().includes(searchLower)
      );
    }

    // Filtre par progress
    if (this.selectedProgress) {
      filtered = filtered.filter(achievement => {
        const progressValue = achievement.progress;
        if (this.selectedProgress === 'lt50') return progressValue < 50;
        if (this.selectedProgress === 'gt50') return progressValue > 50;
        return progressValue === +this.selectedProgress;
      });
    }

    // Tri
    if (this.selectedSort === 'XP Croissant') {
      filtered.sort((a, b) => a.xpPoints - b.xpPoints);
    } else if (this.selectedSort === 'XP Décroissant') {
      filtered.sort((a, b) => b.xpPoints - a.xpPoints);
    }

    this.filteredAchievements = filtered;
  }updateAchievementProgress(): void {
    const staticExerciseId = '98df1738-1a67-4166-80cf-0b78c992f9bdvd';
    const totalSets = 3;
  
    this.achievementService.updateProgress(staticExerciseId, totalSets).subscribe({
      next: () => {
        this.loadAchievements(); // ✅ Recharge simplement la liste
      },
      error: (error) => {
        console.error('❌ Error:', error);
      }
    });
  }
}  