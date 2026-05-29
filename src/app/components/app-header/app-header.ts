import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: `./app-header.html`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {}
