import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AIComponent } from './ai.component';


const routes: Routes = [
  {
    path: '',
    component: AIComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AiRoutingModule {}
