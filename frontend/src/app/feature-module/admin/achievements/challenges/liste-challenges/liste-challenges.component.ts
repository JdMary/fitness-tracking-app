import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomerChallengeService } from 'src/app/shared/services/customer-challenge.service';

import { ChallengeWithUserDTO } from 'src/app/feature-module/customers/achievements/models/ChallengeWithUserDTO.model';



// Bootstrap declaration
declare var bootstrap: any;

@Component({
  selector: 'app-liste-challenges',
  templateUrl: './liste-challenges.component.html',
  styleUrls: ['./liste-challenges.component.css']
})
export class ListeChallengesComponent implements OnInit {

  challenges: ChallengeWithUserDTO[] = [];
  filteredChallenges: ChallengeWithUserDTO[] = [];
  displayedChallenges: ChallengeWithUserDTO[] = [];
  dataSource!: MatTableDataSource<ChallengeWithUserDTO>;
  selectedChallenge?: ChallengeWithUserDTO;

  selectedStatus = '';
  selectedSort = 'XP Décroissant';
  searchValue = '';
  pageSize = 10;
  currentPage = 1;
  totalChallenges = 0;
  pageNumberArray: number[] = [];
  serialNumberArray: number[] = [];

  sortOptions = ['XP Croissant', 'XP Décroissant'];
  statusOptions = [
    { label: 'All', value: '' },
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Pending', value: 'PENDING' },
    { label: 'Completed', value: 'COMPLETED' },
    { label: 'Failed', value: 'FAILED' },
    { label: 'Canceled', value: 'CANCELED' },
  ];

  deleteMessage = '';
  errorMessage = '';

  constructor(
    private challengeService: CustomerChallengeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadChallenges();
  }

  loadChallenges(): void {
    this.challengeService.getAllChallengesWithUsers().subscribe({
      next: (data) => {
        this.challenges = data;
        this.filteredChallenges = data;
        this.totalChallenges = data.length;
        this.currentPage = 1;
        this.applySort(this.selectedSort);
        this.updateDisplayedChallenges();
      },
      error: (error) => console.error('❌ Erreur chargement challenges :', error)
    });
  }

  updateDisplayedChallenges(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedChallenges = this.filteredChallenges.slice(startIndex, endIndex);
    this.dataSource = new MatTableDataSource(this.displayedChallenges);
    this.serialNumberArray = this.displayedChallenges.map((_, index) => startIndex + index + 1);
    this.calculatePages();
  }

  calculatePages(): void {
    const totalPages = Math.ceil(this.filteredChallenges.length / this.pageSize);
    this.pageNumberArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  applyFilter(status: string): void {
    this.selectedStatus = status;
    this.filteredChallenges = status
      ? this.challenges.filter(challenge => challenge.status === status)
      : this.challenges;
    this.applySort(this.selectedSort);
    this.currentPage = 1;
    this.updateDisplayedChallenges();
  }

  applySort(sortType: string): void {
    this.selectedSort = sortType;
    if (sortType === 'XP Croissant') {
      this.filteredChallenges.sort((a, b) => a.xpPoints - b.xpPoints);
    } else {
      this.filteredChallenges.sort((a, b) => b.xpPoints - a.xpPoints);
    }
    this.updateDisplayedChallenges();
  }

  searchChallenges(): void {
    const search = this.searchValue.trim().toLowerCase();
    this.filteredChallenges = this.challenges.filter(challenge =>
      challenge.title.toLowerCase().includes(search) ||
      challenge.name.toLowerCase().includes(search) // ✅ recherche aussi par nom utilisateur
    );
    this.applySort(this.selectedSort);
    this.currentPage = 1;
    this.updateDisplayedChallenges();
  }

  changePageSize(): void {
    this.currentPage = 1;
    this.updateDisplayedChallenges();
  }

  moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updateDisplayedChallenges();
  }

  openDeleteModal(challenge: ChallengeWithUserDTO): void {
    this.selectedChallenge = challenge;
    const modalElement = document.getElementById('deleteChallengeModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  confirmDelete(): void {
    if (!this.selectedChallenge) return;

    this.challengeService.deleteChallenge(this.selectedChallenge.challengeId).subscribe({
      next: () => {
        this.loadChallenges();
        this.deleteMessage = '✅ Challenge supprimé.';
        setTimeout(() => this.deleteMessage = '', 3000);
        this.closeDeleteModal();
      },
      error: (error) => {
        const errorText = error.error?.message || error.error || '';
        if (typeof errorText === 'string') {
          if (errorText.includes('completed')) {
            this.errorMessage = '⛔ Ce challenge est complété et ne peut pas être supprimé.';
          } else if (errorText.includes('not found')) {
            this.errorMessage = '❌ Challenge introuvable.';
          } else {
            this.errorMessage = '❌ Une erreur est survenue lors de la suppression.';
          }
        }
        setTimeout(() => this.errorMessage = '', 3000);
        this.closeDeleteModal();
      }
    });
  }

  closeDeleteModal(): void {
    const modalElement = document.getElementById('deleteChallengeModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
    this.selectedChallenge = undefined;
    this.loadChallenges();
  }

  navigateToList(): void {
    this.router.navigate(['/admin/liste-challenges']);
  }
}
