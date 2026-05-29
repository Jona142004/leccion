import { Routes } from '@angular/router';
import { LeccionPage } from './features/leccion-page/leccion-page';
import { LeccionDetailPage } from './features/leccion-detail-page/leccion-detail-page';

export const routes: Routes = [
 { path: '', component: LeccionPage },
    
    {path:'harry/:id', component:  LeccionDetailPage },


    {path: '**' , redirectTo: ''},
];

