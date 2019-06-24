import { Routes, RouterModule } from '@angular/router';
import { TestListComponent } from './components/test-list/test-list.component';
import { TestDetailComponent } from './components/test-detail/test-detail.component';

const routes: Routes = [
    // Homework
    {
        path: '',
        redirectTo: 'tests',
        pathMatch: 'full'
    },
    {
        path: 'tests',
        component: TestListComponent
    },
    {
        path: 'tests/:id',
        component: TestDetailComponent
    },
    {
        path: '**',
        redirectTo: 'tests'
    }
];

export const routing = RouterModule.forRoot(routes);