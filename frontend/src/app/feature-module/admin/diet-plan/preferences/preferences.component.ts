import { Component, OnInit } from '@angular/core';
import { DietService } from '../../../services/diet.service';
import { Preference } from '../../../models/diet.interface';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.css'
})
export class PreferencesComponent implements OnInit {
  preferences: Preference[] = [];

  constructor(private dietService: DietService) {}

  ngOnInit(): void {
    this.loadDietPreferences();
  }

  loadDietPreferences(): void {
    this.dietService.getPreferences().subscribe({
      next: (data: Preference[]) => {
        this.preferences = data;
      },
      error: (error) => {
        console.error('Error loading preferences:', error);
      }
    });
  }
}
