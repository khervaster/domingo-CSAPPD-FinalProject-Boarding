import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordService } from '../../services/record';
import { ServiceRecord } from '../../models/service-record';

@Component({
  selector: 'app-record-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './record-list.html',
  styleUrl: './record-list.css',
})
export class RecordList implements OnInit {
  recordService = inject(RecordService);
  records = signal<ServiceRecord[]>([]);

  ngOnInit(): void {
    this.recordService.getRecords().subscribe({
      next: (data) => this.records.set(data),
    });
  }
}
