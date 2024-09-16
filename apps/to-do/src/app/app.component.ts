import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ToDoFeatureComponent } from '@angular-monorepo/to-do/feature';
import { HeaderComponent, FooterComponent } from '@angular-monorepo/shared/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ToDoFeatureComponent, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'to-do';
}
