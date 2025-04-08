import { Component, OnInit } from '@angular/core';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';
import { routes } from 'src/app/shared/routes/routes';


@Component({
  selector: 'app-sport-facility',
  templateUrl: './sport-facility.component.html',
  styleUrls: ['./sport-facility.component.css']
})
export class SportFacilityComponent implements OnInit {
  sportFacility = {
    name: '',
    location: '',
    sportType: '',
    availability: true,
    maxSubscription: 0,
    normalPrice: 0,
    premiumPrice: 0,
    description: ''
  };

  constructor(private sportFacilityService: SportFacilityService) {}

  ngOnInit(): void {}

  submitFacility(): void {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQwNjk3NTJ9.s1Zv4XYhK3PfiIxWRNg0ZacsmmjbB7_qy0FQL_MmdKE'; // Ton vrai token 🔥

    this.sportFacilityService.createFacility(this.sportFacility, token).subscribe({
      next: (response) => {
        console.log('✅ Facility created successfully', response);
        alert('Facility created successfully 🎉');
        this.resetForm();
      },
      error: (error) => {
        console.error('❌ Error creating facility', error);
        alert('Error creating facility ❌');
      }
    });
  }

  resetForm(): void {
    this.sportFacility = {
      name: '',
      location: '',
      sportType: '',
      availability: true,
      maxSubscription: 0,
      normalPrice: 0,
      premiumPrice: 0,
      description: ''
    };
  }
}
