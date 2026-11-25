import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { RecordList } from './pages/record-list/record-list';
import { RecordForm } from './pages/record-form/record-form';
import { RecordDetail } from './pages/record-detail/record-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'records', component: RecordList },
  { path: 'records/create', component: RecordForm },
  { path: 'records/edit/:id', component: RecordForm },
  { path: 'records/:id', component: RecordDetail },
];
