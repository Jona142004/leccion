import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LeccionService } from '../service/leccion-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leccion-page',
  imports: [RouterLink],
  templateUrl: './leccion-page.html',
  styleUrl: './leccion-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeccionPage {
  private leccionService = inject(LeccionService);
  paisesResource = rxResource({
    stream: () => this.leccionService.getCountries(),
  });
}
