import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
      {
        path: '',
        // component: NxWelcomeComponent,
        redirectTo: "to-do",
        pathMatch: 'full',
      },
      {
        path: 'to-do',
        loadComponent: () =>
          import('@angular-monorepo/to-do/feature').then((m) => m.ToDoFeatureComponent),
      },      
      {
        path: 'fashion-world',
        loadComponent: () =>
          import('@angular-monorepo/fashion-world/feature').then((m) => m.FashionWorldFeatureComponent),
      },
];
