import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  imports: [],
  template: `<p>app-footer works!</p>`,
  styleUrl: './app-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooter {}
