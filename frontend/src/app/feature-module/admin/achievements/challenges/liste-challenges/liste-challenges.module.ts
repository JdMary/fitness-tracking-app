import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeChallengesComponent } from './liste-challenges.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

const routes: Routes = [
  { path: '', component: ListeChallengesComponent }
];

@NgModule({
  declarations: [ListeChallengesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatTableModule,
    MatSortModule
  ]
})
export class ListeChallengesModule { }
