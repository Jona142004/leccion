import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of, tap } from 'rxjs';
import { LeccionService } from '../service/leccion-service';
import { LeccionCacheService } from '../service/leccion-cache.service';

@Component({
  selector: 'app-leccion-detail-page',
  imports: [RouterLink],
  templateUrl: './leccion-detail-page.html',
  styleUrl: './leccion-detail-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeccionDetailPage {
  private route = inject(ActivatedRoute);
  private leccionService = inject(LeccionService);
  private cacheService = inject(LeccionCacheService);

  private countryName = this.route.snapshot.paramMap.get('id') ?? '';

  characterResource = rxResource({
    stream: () => {
      const cached = this.cacheService.getByName(this.countryName);
      if (cached) {
        return of(cached);
      }

      return this.leccionService.getCountryByName(this.countryName).pipe(
        tap((pais) => this.cacheService.save(pais))
      );
    },
  });
}
