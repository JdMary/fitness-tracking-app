import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { ListPromotionComponent } from './list-promotion/list-promotion.component';
import { EditPromotionComponent } from './edit-promotion/edit-promotion.component';

// Material Modules
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

// Routing
import { PromotionRoutingModule } from './promotion-routing.module';

@NgModule({
  declarations: [
    AddPromotionComponent,
    ListPromotionComponent,
    EditPromotionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PromotionRoutingModule,

    // Material
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatSortModule
  ]
})
export class PromotionModule { }
