import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPromotionComponent } from './list-promotion/list-promotion.component';
import { PromotionRoutingModule } from './promotion-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ListPromotionComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PromotionRoutingModule
  ]
})
export class PromotionModule { }
