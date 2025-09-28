import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'project/:id', loadComponent: () => import('./project-detail/project-detail.component').then(m => m.ProjectDetailComponent) },
  { path: 'landing/fitness-club', loadComponent: () => import('./landings/fitness/fitness.component').then(m => m.FitnessComponent) },
  { path: 'landing/restaurant', loadComponent: () => import('./landings/restaurant/restaurant.component').then(m => m.RestaurantComponent) },
  { path: 'landing/beauty-salon', loadComponent: () => import('./landings/beauty/beauty.component').then(m => m.BeautyComponent) },
  { path: 'landing/travel-agency', loadComponent: () => import('./landings/travel/travel.component').then(m => m.TravelComponent) },
  { path: 'landing/coffee-shop', loadComponent: () => import('./landings/coffee/coffee.component').then(m => m.CoffeeComponent) },
  { path: '**', redirectTo: '' }
];
