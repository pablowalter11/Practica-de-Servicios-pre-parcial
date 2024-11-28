import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageFormComponent } from './pages/page-form/page-form.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageUpdateComponent } from './pages/page-update/page-update.component';
import { PageDetailComponent } from './pages/page-detail/page-detail.component';

export const routes: Routes = [
    { path: '', component: PageHomeComponent },
    { path: 'form', component: PageFormComponent },
    { path: 'list', component: PageListComponent },
    { path: 'detail/:id', component: PageDetailComponent },
    { path: 'update/:id', component: PageUpdateComponent },
    { path: '**', redirectTo: '' }
];
