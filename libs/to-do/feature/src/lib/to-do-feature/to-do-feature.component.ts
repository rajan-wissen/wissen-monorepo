import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-to-do-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-feature.component.html',
  styleUrl: './to-do-feature.component.css',
})
export class ToDoFeatureComponent {}
