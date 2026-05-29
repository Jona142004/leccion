import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-leccion-page',
  imports: [],
  template: `<p>leccion-page works!</p>`,
  styleUrl: './leccion-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeccionPage {}
