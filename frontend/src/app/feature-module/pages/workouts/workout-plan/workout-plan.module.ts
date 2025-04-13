import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutPlanRoutingModule } from './workout-plan-routing.module';
import { WorkoutPlanComponent } from './workout-plan.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersHeaderComponent } from '../../../customers/common/customers-header/customers-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        WorkoutPlanComponent
    ],
    exports: [
        WorkoutPlanComponent
    ],
    imports: [
        CommonModule,
        WorkoutPlanRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class WorkoutPlanModule { }
