import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-to-do-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-ui.component.html',
  styleUrl: './to-do-ui.component.css',
})
export class ToDoUiComponent {}
