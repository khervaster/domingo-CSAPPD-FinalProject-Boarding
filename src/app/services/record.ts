import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceRecord } from '../models/service-record';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/records';

  currentRole = signal<'Boarder' | 'Management'>('Management');

  toggleRole(): void {
    this.currentRole.update((role) => (role === 'Management' ? 'Boarder' : 'Management'));
  }

  getRecords(): Observable<ServiceRecord[]> {
    return this.http.get<ServiceRecord[]>(this.apiUrl);
  }
}
