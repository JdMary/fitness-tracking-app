import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routes } from 'src/app/shared/routes/routes';
import { CustomerChallengeService } from '../../../../shared/services/customer-challenge.service';
import { Challenge } from '../models/challenge.model';
import { ChallengeStatus } from '../models/challenge-status.enum';

@Component({
  selector: 'app-customer-challenge',
  templateUrl: './customer-challenge.component.html',
  styleUrls: ['./customer-challenge.component.css'],
})
export class CustomerChallengeComponent implements OnInit {
  public routes = routes;
  public challenges: Challenge[] = [];
  public filteredChallenges: Challenge[] = [];
  public selectedStatus: string = '';
  public ChallengeStatus = ChallengeStatus; // Pour utiliser dans le template
  public isClassAdded: boolean[] = [false];
  public selectedSort = 'XP Décroissant'; // Valeur par défaut
  public searchTerm: string = '';
  
  
alertShownChallenges: Set<string> = new Set();

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private renderer: Renderer2,
    private el: ElementRef,
    private challengeService: CustomerChallengeService
  ) {}

  ngOnInit(): void {
    this.fetchChallenges();
    setInterval(() => {
      this.fetchChallenges();
    }, 10000);
  }

  // ✅ Récupération des challenges depuis le service
  fetchChallenges(): void {
    this.challengeService.getMyChallenges().subscribe(
      (data: Challenge[]) => {
        
        console.log('✅ Données challenges :', data);
        this.challenges = data;
        this.filteredChallenges = data;
  
        // Vérifier les challenges actifs
        this.checkForActiveChallenges();
      },
      (err: any) => {
        console.error('❌ Erreur lors de la récupération des challenges', err);
      }
    );
  }
  

  // ✅ Appliquer un filtre par statut
  applyFilter(selectedStatus: string): void {
    this.selectedStatus = selectedStatus;
    if (!selectedStatus) {
      this.filteredChallenges = this.challenges;
    } else {
      this.filteredChallenges = this.challenges.filter(
        (challenge) => challenge.status === selectedStatus
      );
    }
  }



  // ✅ Barre de recherche
  applySearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredChallenges = this.challenges;
      return;
    }
  
    this.challengeService.getChallengesByKeywordAndDate(this.searchTerm).subscribe(
      (data: Challenge[]) => {
        this.filteredChallenges = data;
        console.log('✅ Résultat de recherche :', data);
      },
      (error) => {
        console.error('❌ Erreur lors de la recherche :', error);
      }
    );
  }
  

  // ✅ Classe CSS pour le badge en fonction du statut
  getBadgeClass(status: ChallengeStatus): string {
    switch (status) {
      case ChallengeStatus.ACTIVE:
        return 'badge bg-success';
      case ChallengeStatus.PENDING:
        return 'badge bg-warning text-dark';
      case ChallengeStatus.COMPLETED:
        return 'badge bg-primary';
      case ChallengeStatus.CANCELED:
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }


  
  


  // ✅ Classe sélection de favoris (optionnel)
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }





  participate(challengeId: string): void {
    console.log('✅ challengeId envoyé :', challengeId);
    this.challengeService.participate(challengeId).subscribe({
      next: (response) => {
        console.log(response.message); // Affiche bien le message du backend
        this.fetchChallenges();
      },
      error: (error) => {
        console.error('❌ Erreur lors de la participation :', error);
      }
    });
  }
  
  
  
  
  validateChallenge(challengeId: string): void {
    this.challengeService.validateChallenge(challengeId).subscribe(
      (response: any) => {
        console.log(response);
        this.fetchChallenges(); // 🔄 Rafraîchir la liste après validation
      },
      (error: any) => {
        console.error('❌ Erreur lors de la validation :', error);
      }
    );
  }
  checkForActiveChallenges(): void {
    const shownFromStorage = localStorage.getItem('alertShownChallenges');
    this.alertShownChallenges = shownFromStorage ? new Set(JSON.parse(shownFromStorage)) : new Set();
  
    this.filteredChallenges.forEach(challenge => {
      if (
        challenge.status === 'ACTIVE' &&
        !this.alertShownChallenges.has(challenge.challengeId)
      ) {
        alert('🚀 Le défi "' + challenge.title + '" a commencé !');
  
        this.alertShownChallenges.add(challenge.challengeId);
  
        localStorage.setItem('alertShownChallenges', JSON.stringify(Array.from(this.alertShownChallenges)));
      }
    });
  }
  
  
}
