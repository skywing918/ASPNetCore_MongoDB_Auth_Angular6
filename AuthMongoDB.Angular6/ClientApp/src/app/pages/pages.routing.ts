import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RootComponent } from './root.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from '../auth.guard';


export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'pages',
    component: RootComponent, canActivate: [AuthGuard],

    children: [
      { path: 'home', component: HomeComponent },
      { path: 'counter', component: CounterComponent},
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  }
]);
