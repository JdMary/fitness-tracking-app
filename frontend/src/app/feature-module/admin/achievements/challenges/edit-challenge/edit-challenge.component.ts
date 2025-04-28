import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerChallengeService } from 'src/app/shared/services/customer-challenge.service';
import { Challenge } from 'src/app/feature-module/customers/achievements/models/challenge.model';
import { ChallengeStatus } from 'src/app/feature-module/customers/achievements/models/challenge-status.enum';
import { User } from 'src/app/feature-module/customers/achievements/models/user.model';

@Component({
  selector: 'app-edit-challenge',
  templateUrl: './edit-challenge.component.html',
  styleUrls: ['./edit-challenge.component.css']
})
export class EditChallengeComponent implements OnInit {

  challengeId!: string;
  challenge: Challenge = {
    challengeId: '',
    title: '',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    description: '',
    xpPoints: 0,
    userId: '',
    status: ChallengeStatus.PENDING,
    reminder15: false,
    participation: false,
    validation: false
  };

  users: User[] = [];
  successMessage: string = '';
  errors: { [key: string]: string } = {};
  statusOptions = [
    { label: 'Active',   value: ChallengeStatus.ACTIVE   },
    { label: 'Pending',  value: ChallengeStatus.PENDING  },
    { label: 'Failed',   value: ChallengeStatus.FAILED   },
    { label: 'Canceled', value: ChallengeStatus.CANCELED }
  ];

  constructor(
    private route: ActivatedRoute,
    private challengeService: CustomerChallengeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.challengeId = this.route.snapshot.paramMap.get('challengeId')!;
    this.loadUsers();
    this.fetchChallengeDetails();
  }

  loadUsers(): void {
    this.challengeService.getAllUsers().subscribe({
      next: data => this.users = data,
      error: err => console.error('❌ Erreur lors du chargement des utilisateurs :', err)
    });
  }

  fetchChallengeDetails(): void {
    this.challengeService.getChallengeById(this.challengeId).subscribe({
      next: data => this.challenge = { ...data },
      error: () => this.errors['general'] = '❌ Échec du chargement des détails du challenge.'
    });
  }

  updateChallenge(): void {
    this.errors = {};
    this.successMessage = '';

    this.challengeService.updateChallenge(this.challengeId, this.challenge).subscribe({
      next: () => {
        this.successMessage = '✅ Challenge mis à jour avec succès ! Redirection...';
        setTimeout(() => this.router.navigate(['/admin/liste-challenges']), 1500);
      },
      error: (errorResponse) => {
        console.error('❌ Erreurs reçues :', errorResponse);
        
        if (errorResponse.error && typeof errorResponse.error === 'string') {
          try {
            // Essayer de parser le message d'erreur JSON
            const errorObj = JSON.parse(errorResponse.error);
            if (errorObj.errors) {
              errorObj.errors.forEach((error: string) => {
                if (error.includes('title:')) this.errors['title'] = error.split('title:')[1].trim();
                else if (error.includes('description:')) this.errors['description'] = error.split('description:')[1].trim();
                else if (error.includes('xpPoints:')) this.errors['xpPoints'] = error.split('xpPoints:')[1].trim();
                else if (error.includes('startDate:')) this.errors['startDate'] = error.split('startDate:')[1].trim();
                else if (error.includes('endDate:')) this.errors['endDate'] = error.split('endDate:')[1].trim();
                else if (error.includes('userId:')) this.errors['userId'] = error.split('userId:')[1].trim();
                else if (error.includes('status:')) this.errors['status'] = error.split('status:')[1].trim();
              });
            }
          } catch (e) {
            // Si le parsing échoue, traiter comme une erreur simple
            const errorParts = errorResponse.error.split('|');
            errorParts.forEach((part: string) => {
              const [field, message] = part.split(':').map((s: string) => s.trim());
              if (field && message) {
                const cleanField = field.toLowerCase();
                if (cleanField.includes('title')) this.errors['title'] = message;
                else if (cleanField.includes('description')) this.errors['description'] = message;
                else if (cleanField.includes('xppoints')) this.errors['xpPoints'] = message;
                else if (cleanField.includes('startdate')) this.errors['startDate'] = message;
                else if (cleanField.includes('enddate')) this.errors['endDate'] = message;
                else if (cleanField.includes('userid')) this.errors['userId'] = message;
                else if (cleanField.includes('status')) this.errors['status'] = message;
              }
            });
          }
        }
      }
    });
  }

  navigateToList(): void {
    this.router.navigate(['/admin/liste-challenges']);
  }

  clearError(field: string): void {
    if (this.errors[field]) {
      delete this.errors[field];
    }
  }

  titleCase(str: string): string {
    return str.toLowerCase().split(' ').map((part: string): string => {
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    }).join(' ');
  }
}
