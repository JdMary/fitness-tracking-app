import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSportFacilityComponent } from './list-sport-facility.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Pour ngModel
import { MatSelectModule } from '@angular/material/select'; // ✅ Pour mat-select
import { MatOptionModule } from '@angular/material/core'; // ✅ Pour mat-option
import { MatTableModule } from '@angular/material/table'; // ✅ Pour table Material
import { MatSortModule } from '@angular/material/sort'; // ✅ Si tu veux le tri
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  { path: '', component: ListSportFacilityComponent }
];

@NgModule({
  declarations: [
    ListSportFacilityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatSortModule,
    NgxPaginationModule
  ]
})
export class ListSportFacilityModule { }
