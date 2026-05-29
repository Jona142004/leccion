import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-leccion-detail-page',
  imports: [],
  template: `<p>leccion-detail-page works!</p>`,
  styleUrl: './leccion-detail-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeccionDetailPage {}
