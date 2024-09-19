import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // {
  //   path: 'to-do',
  //   loadChildren: () => import('to-do/Component').then((m) => m.AppComponent),
  // },  
  {
    path: 'to-do',
    loadComponent: () => import('to-do/Component').then((m) => m.AppComponent),
  },
  {
    path: 'fashion-world',
    loadComponent: () =>
      import('fashion-world/Component').then((m) => m.AppComponent),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
