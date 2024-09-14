import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ToDoUiComponent } from '@angular-monorepo/to-do/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ToDoUiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'to-do';
}
