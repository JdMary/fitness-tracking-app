import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location.component';

const routes: Routes = [
  {
    path: '',
    component: LocationComponent,
    children: [
      {
        path: 'countries',
        loadChildren: () =>
          import('./countries/countries.module').then((m) => m.CountriesModule),
      },
      {
        path: 'states',
        loadChildren: () =>
          import('./states/states.module').then((m) => m.StatesModule),
      },
      {
        path: 'cities',
        loadChildren: () =>
          import('./cities/cities.module').then((m) => m.CitiesModule),
      },
      {
        path: 'add-city',
        loadChildren: () =>
          import('./add-city/add-city.module').then((m) => m.AddCityModule),
      },
      {
        path: 'add-countries',
        loadChildren: () =>
          import('./add-countries/add-countries.module').then(
            (m) => m.AddCountriesModule
          ),
      },
      {
        path: 'add-state',
        loadChildren: () =>
          import('./add-state/add-state.module').then((m) => m.AddStateModule),
      },
      {
        path: 'edit-city',
        loadChildren: () =>
          import('./edit-city/edit-city.module').then((m) => m.EditCityModule),
      },
      {
        path: 'edit-countries',
        loadChildren: () =>
          import('./edit-countries/edit-countries.module').then(
            (m) => m.EditCountriesModule
          ),
      },
      {
        path: 'edit-state',
        loadChildren: () =>
          import('./edit-state/edit-state.module').then(
            (m) => m.EditStateModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
