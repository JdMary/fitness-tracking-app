import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomerChallengeService } from 'src/app/feature-module/customers/achievements/customer-challenge/customer-challenge.service';
import { Challenge } from 'src/app/feature-module/customers/achievements/customer-challenge/challenge.model';

// Bootstrap declaration
declare var bootstrap: any;

@Component({
  selector: 'app-liste-challenges',
  templateUrl: './liste-challenges.component.html',
  styleUrls: ['./liste-challenges.component.css']
})
export class ListeChallengesComponent implements OnInit {

  // 🔢 Données
  challenges: Challenge[] = [];
  filteredChallenges: Challenge[] = [];
  displayedChallenges: Challenge[] = [];
  dataSource!: MatTableDataSource<Challenge>;

  // 🎛️ Filtres et pagination
  selectedStatus = '';
  selectedSort = 'XP Décroissant'; // ✅ Valeur par défaut ici
  searchValue = '';
  pageSize = 10;
  currentPage = 1;
  totalChallenges = 0;
  pageNumberArray: number[] = [];
  serialNumberArray: number[] = [];

  // Options tri / filtre
  sortOptions = ['XP Croissant', 'XP Décroissant'];
  statusOptions = [
    { label: 'All', value: '' },
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Pending', value: 'PENDING' },
    { label: 'Completed', value: 'COMPLETED' },
    { label: 'Failed', value: 'FAILED' },
    { label: 'Canceled', value: 'CANCELED' },
  ];

  // Messages
  deleteMessage = '';
  errorMessage = '';

  // Pour la suppression
  selectedChallenge?: Challenge;

  constructor(
    private challengeService: CustomerChallengeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadChallenges();
  }

  // 🧩 Charge tous les challenges
  loadChallenges(): void {
    this.challengeService.getAllChallenges().subscribe({
      next: (data) => {
        this.challenges = data;
        this.filteredChallenges = data;
        this.totalChallenges = data.length;
        this.currentPage = 1;

        // ✅ Applique le tri par défaut
        this.applySort(this.selectedSort);
        this.updateDisplayedChallenges();
      },
      error: (error) => console.error('Error loading challenges:', error)
    });
  }

  // 📊 Met à jour l'affichage paginé
  updateDisplayedChallenges(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedChallenges = this.filteredChallenges.slice(startIndex, endIndex);
    this.dataSource = new MatTableDataSource(this.displayedChallenges);
    this.serialNumberArray = this.displayedChallenges.map((_, index) => startIndex + index + 1);
    this.calculatePages();
  }

  // 🔢 Pagination
  calculatePages(): void {
    const totalPages = Math.ceil(this.filteredChallenges.length / this.pageSize);
    this.pageNumberArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // 🎛️ Filtrer par status
  applyFilter(status: string): void {
    this.selectedStatus = status;
    this.filteredChallenges = status
      ? this.challenges.filter(challenge => challenge.status === status)
      : this.challenges;

    // ✅ Applique le tri après filtrage
    this.applySort(this.selectedSort);
    this.currentPage = 1;
    this.updateDisplayedChallenges();
  }

  // 🧩 Applique le tri
  applySort(sortType: string): void {
    this.selectedSort = sortType;
    if (sortType === 'XP Croissant') {
      this.filteredChallenges.sort((a, b) => a.xpPoints - b.xpPoints);
    } else if (sortType === 'XP Décroissant') {
      this.filteredChallenges.sort((a, b) => b.xpPoints - a.xpPoints);
    }

    this.updateDisplayedChallenges();
  }

  // 🔍 Recherche
  searchChallenges(): void {
    const search = this.searchValue.trim().toLowerCase();
    this.filteredChallenges = this.challenges.filter(challenge =>
      challenge.title.toLowerCase().includes(search)
    );

    // ✅ Applique tri après recherche
    this.applySort(this.selectedSort);
    this.currentPage = 1;
    this.updateDisplayedChallenges();
  }

  // 📄 Changement de taille de page
  changePageSize(): void {
    this.currentPage = 1;
    this.updateDisplayedChallenges();
  }

  // ➡️ Changement de page
  moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updateDisplayedChallenges();
  }

  // 🗑️ Ouvre le modal de suppression
  openDeleteModal(challenge: Challenge): void {
    this.selectedChallenge = challenge;
    const modalElement = document.getElementById('deleteChallengeModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // ✅ Confirme la suppression
  confirmDelete(): void {
    if (!this.selectedChallenge) return;

    this.challengeService.deleteChallenge(this.selectedChallenge.challengeId).subscribe({
      next: () => {
        this.loadChallenges();
        this.deleteMessage = '✅ Challenge successfully deleted.';
        setTimeout(() => this.deleteMessage = '', 3000);
        this.closeDeleteModal();
      },
      error: (error) => {
        const errorText = error.error?.message || error.error || '';
        if (typeof errorText === 'string') {
          if (errorText.includes('completed')) {
            this.errorMessage = '⛔ This challenge is completed and cannot be deleted.';
          } else if (errorText.includes('not found')) {
            this.errorMessage = '❌ Challenge not found.';
          } else {
            this.errorMessage = '❌ An error occurred while deleting the challenge.';
          }
        } 
        setTimeout(() => this.errorMessage = '', 3000);
        this.closeDeleteModal();
      }
    });
  }

  // ❌ Ferme le modal proprement
  closeDeleteModal(): void {
    const modalElement = document.getElementById('deleteChallengeModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
    this.selectedChallenge = undefined;
    this.loadChallenges(); // ✅ Recharge la liste pour être toujours à jour
  }

  // 🔙 Navigation vers la liste
  navigateToList(): void {
    this.router.navigate(['/admin/liste-challenges']);
  }
}
