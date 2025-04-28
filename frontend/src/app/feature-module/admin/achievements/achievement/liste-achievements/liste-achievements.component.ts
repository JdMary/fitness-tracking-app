import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomerAchievementService } from 'src/app/shared/services/customer-achievement.service';
import { Achievement } from 'src/app/feature-module/customers/achievements/models/achievement.model';

// Bootstrap declaration
declare var bootstrap: any;

@Component({
  selector: 'app-liste-achievements',
  templateUrl: './liste-achievements.component.html',
  styleUrls: ['./liste-achievements.component.css']
})
export class ListeAchievementsComponent implements OnInit {

  // 🔢 Données
  achievements: Achievement[] = [];
  filteredAchievements: Achievement[] = [];
  displayedAchievements: Achievement[] = [];
  dataSource!: MatTableDataSource<Achievement>;

  // 🎛️ Filtres et pagination
  selectedSort = 'XP Décroissant';
  searchValue = '';
  selectedProgress = '';
  pageSize = 10;
  currentPage = 1;
  totalAchievements = 0;
  pageNumberArray: number[] = [];
  serialNumberArray: number[] = [];

  // Options tri
  sortOptions = ['XP Croissant', 'XP Décroissant'];

  // Options de filtre par progress
  progressOptions = [
    { label: 'All', value: '' },
    { label: '0%', value: '0' },
    { label: '50%', value: '50' },
    { label: '100%', value: '100' },
    { label: 'Less than 50%', value: 'lt50' },
    { label: 'Greater than 50%', value: 'gt50' }
  ];

  // Messages
  deleteMessage = '';
  errorMessage = '';

  // Pour la suppression
  selectedAchievement?: Achievement;

  constructor(
    private achievementService: CustomerAchievementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAchievements();
  }

  // 🧩 Charge tous les achievements
  loadAchievements(): void {
    this.achievementService.getAllAchievements().subscribe({
      next: (data) => {
        this.achievements = data;
        this.filteredAchievements = data;
        this.totalAchievements = data.length;
        this.currentPage = 1;

        this.applySort(this.selectedSort);
        this.updateDisplayedAchievements();
      },
      error: (error) => console.error('Error loading achievements:', error)
    });
  }

  // 📊 Met à jour l'affichage paginé
  updateDisplayedAchievements(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedAchievements = this.filteredAchievements.slice(startIndex, endIndex);
    this.dataSource = new MatTableDataSource(this.displayedAchievements);
    this.serialNumberArray = this.displayedAchievements.map((_, index) => startIndex + index + 1);
    this.calculatePages();
  }

  // 🔢 Pagination
  calculatePages(): void {
    const totalPages = Math.ceil(this.filteredAchievements.length / this.pageSize);
    this.pageNumberArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // 🎛️ Applique le tri
  applySort(sortType: string): void {
    this.selectedSort = sortType;
    if (sortType === 'XP Croissant') {
      this.filteredAchievements.sort((a, b) => a.xpPoints - b.xpPoints);
    } else if (sortType === 'XP Décroissant') {
      this.filteredAchievements.sort((a, b) => b.xpPoints - a.xpPoints);
    }

    this.updateDisplayedAchievements();
  }

  // 🔍 Recherche
  searchAchievements(): void {
    const search = this.searchValue.trim().toLowerCase();
    this.filteredAchievements = this.achievements.filter(achievement =>
      achievement.title.toLowerCase().includes(search)
    );

    this.applyProgressFilter(this.selectedProgress);
    this.applySort(this.selectedSort);
    this.currentPage = 1;
    this.updateDisplayedAchievements();
  }

  // 🎯 Filtre par progress
  applyProgressFilter(progress: string): void {
    this.selectedProgress = progress;

    this.filteredAchievements = this.achievements.filter(achievement => {
      if (!progress) return true; // Pas de filtre

      const progressValue = achievement.progress;

      if (progress === 'lt50') {
        return progressValue < 50;
      } else if (progress === 'gt50') {
        return progressValue > 50;
      } else {
        return progressValue === +progress;
      }
    });

    this.applySort(this.selectedSort);
    this.currentPage = 1;
    this.updateDisplayedAchievements();
  }

  // 📄 Changement de taille de page
  changePageSize(): void {
    this.currentPage = 1;
    this.updateDisplayedAchievements();
  }

  // ➡️ Changement de page
  moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updateDisplayedAchievements();
  }

  // 🗑️ Ouvre le modal de suppression
  openDeleteModal(achievement: Achievement): void {
    this.selectedAchievement = achievement;
    const modalElement = document.getElementById('deleteAchievementModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // ✅ Confirme la suppression
  confirmDelete(): void {
    if (!this.selectedAchievement) return;

    this.achievementService.deleteAchievement(this.selectedAchievement.achieveId).subscribe({
      next: () => {
        this.loadAchievements();
        this.deleteMessage = '✅ Achievement successfully deleted.';
        setTimeout(() => this.deleteMessage = '', 3000);
        this.closeDeleteModal();
      },
      error: (error) => {
        const errorText = error.error?.message || error.error || '';
        if (typeof errorText === 'string') {
          if (errorText.includes('completed')) {
            this.errorMessage = '⛔ This achievement is completed and cannot be deleted.';
          } else if (errorText.includes('not found')) {
            this.errorMessage = '❌ Achievement not found.';
          } else {
            this.errorMessage = '❌ An error occurred while deleting the achievement.';
          }
        }
        setTimeout(() => this.errorMessage = '', 3000);
        this.closeDeleteModal();
      }
    });
  }

  // ❌ Ferme le modal proprement
  closeDeleteModal(): void {
    const modalElement = document.getElementById('deleteAchievementModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
    this.selectedAchievement = undefined;
    this.loadAchievements();
  }

  // 🔙 Navigation vers la liste
  navigateToList(): void {
    this.router.navigate(['/admin/liste-achievements']);
  }
}
