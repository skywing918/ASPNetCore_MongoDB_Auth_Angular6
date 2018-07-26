import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { RootComponent } from './root.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';

import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from '../auth.guard';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [RootComponent, HeaderComponent, HomeComponent, NavMenuComponent, CounterComponent, FetchDataComponent, ProfileComponent],
  exports: [],
  providers: [AuthGuard]
})
export class PagesModule { }
