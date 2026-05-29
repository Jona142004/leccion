import { Injectable } from '@angular/core';
import { PaisResponse } from '../models/leccion-interface';

@Injectable({ providedIn: 'root' })
export class LeccionCacheService {
  private readonly key = 'pais-cache';

  getByName(name: string): PaisResponse | null {
    const map = this.readMap();
    return map[name] ?? null;
  }

  save(pais: PaisResponse): void {
    const map = this.readMap();
    map[pais.name.common] = pais;
    localStorage.setItem(this.key, JSON.stringify(map));
  }

  private readMap(): Record<string, PaisResponse> {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : {};
  }
}
