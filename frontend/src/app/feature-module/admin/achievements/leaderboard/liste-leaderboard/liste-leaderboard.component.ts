import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomerLeaderboardService } from 'src/app/shared/services/customer-leaderboard.service';
import { LeaderBoard } from 'src/app/feature-module/customers/achievements/models/customer-leaderboard.model';
import { HttpErrorResponse } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-liste-leaderboard',
  templateUrl: './liste-leaderboard.component.html',
  styleUrls: ['./liste-leaderboard.component.css']
})
export class ListeLeaderboardComponent implements OnInit {

  leaderboards: LeaderBoard[] = [];
  filteredLeaderboards: LeaderBoard[] = [];
  displayedLeaderboards: LeaderBoard[] = [];
  dataSource!: MatTableDataSource<LeaderBoard>;

  searchValue = '';
  pageSize = 10;
  currentPage = 1;
  totalLeaderboards = 0;
  pageNumberArray: number[] = [];
  serialNumberArray: number[] = [];

  deleteMessage = '';
  errorMessage = '';

  selectedBoard?: LeaderBoard;

  constructor(
    private leaderboardService: CustomerLeaderboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLeaderboards();
  }

  loadLeaderboards(): void {
    this.leaderboardService.getAllLeaderboards().subscribe({
      next: (data) => {
        this.leaderboards = data;
        this.filteredLeaderboards = data;
        this.totalLeaderboards = data.length;
        this.currentPage = 1;
        this.updateDisplayedLeaderboards();
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = `❌ ${error.message}`;
        setTimeout(() => this.errorMessage = '', 3000);
      }
    });
  }

  updateDisplayedLeaderboards(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedLeaderboards = this.filteredLeaderboards.slice(startIndex, endIndex);
    this.serialNumberArray = this.displayedLeaderboards.map((_, i) => startIndex + i + 1);
    this.dataSource = new MatTableDataSource(this.displayedLeaderboards);
    this.calculatePages();
  }

  calculatePages(): void {
    const totalPages = Math.ceil(this.filteredLeaderboards.length / this.pageSize);
    this.pageNumberArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  searchLeaderboards(): void {
    const search = this.searchValue.trim().toLowerCase();
    this.filteredLeaderboards = this.leaderboards.filter(board =>
      board.name.toLowerCase().includes(search)
    );
    this.currentPage = 1;
    this.updateDisplayedLeaderboards();
  }

  changePageSize(): void {
    this.currentPage = 1;
    this.updateDisplayedLeaderboards();
  }

  moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updateDisplayedLeaderboards();
  }

  openDeleteModal(board: LeaderBoard): void {
    this.selectedBoard = board;
    const modalElement = document.getElementById('deleteLeaderboardModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  confirmDelete(): void {
    if (!this.selectedBoard) return;
    this.leaderboardService.deleteLeaderboard(this.selectedBoard.boardId).subscribe({
      next: () => {
        this.deleteMessage = '✅ Leaderboard successfully deleted.';
        setTimeout(() => this.deleteMessage = '', 3000);
        this.closeDeleteModal();
        this.loadLeaderboards();
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = `❌ ${error.message}`;
        setTimeout(() => this.errorMessage = '', 3000);
        this.closeDeleteModal();
      }
    });
  }

  closeDeleteModal(): void {
    const modalElement = document.getElementById('deleteLeaderboardModal');
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal?.hide();
    this.selectedBoard = undefined;
  }

}
