import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';

@Component({
  selector: 'app-edit-sport-facility',
  templateUrl: './edit-sport-facility.component.html',
  styleUrls: ['./edit-sport-facility.component.css']
})
export class EditSportFacilityComponent implements OnInit {

  sportFacility: any = {}; 
  facilityId: string = '';
  token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQyNzkyOTl9.2BpGPYAL-NLlykkI-Yu8Nt2EkNL8UdPSeiRwVVXuOmw';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sportFacilityService: SportFacilityService
  ) { }

  ngOnInit(): void {
    this.facilityId = this.route.snapshot.paramMap.get('id')!;
    this.loadFacility();
  }

  loadFacility(): void {
    this.sportFacilityService.getFacilityById(this.facilityId, this.token).subscribe({
      next: (response) => {
        this.sportFacility = response;
      },
      error: (error) => {
        console.error(' Error loading facility', error);
      }
    });
  }

  updateFacility(): void {
    this.sportFacilityService.updateFacility(this.sportFacility, this.token).subscribe({
      next: (response) => {
        alert('Facility updated successfully ');
        this.router.navigate(['/admin/list-sport-facility']);
      },
      error: (error) => {
        console.error('Error updating facility', error);
      }
    });
  }
}
