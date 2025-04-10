import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './sport-facility-details.component.html',
styleUrls: ['./sport-facility-details.component.css']

})
export class FacilityDetailComponent implements OnInit {
  facility: any;
  routes = routes;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sportFacilityService: SportFacilityService
  ) {}

  ngOnInit(): void {
    const facilityId = this.route.snapshot.paramMap.get('id');
    if (facilityId) {
      this.sportFacilityService.getFacilityPublicById(+facilityId).subscribe({
        next: (data) => {
          this.facility = data;
        },
        error: (error) => {
          console.error('Error loading facility details', error);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate([this.routes.userSportFacility + '/list']);
  }
}
