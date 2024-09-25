import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ToDoFeatureComponent } from '@angular-monorepo/to-do/feature';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, ToDoFeatureComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'to-do';
}
