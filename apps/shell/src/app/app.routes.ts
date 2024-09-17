import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'fashion-world',
    loadChildren: () =>
      import('fashion-world/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'to-do',
    loadChildren: () => import('to-do/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
