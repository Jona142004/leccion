import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-app-header',
  imports: [],
  template: `<p>app-header works!</p>`,
  styleUrl: './app-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {}
