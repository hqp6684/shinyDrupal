import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../authentication/service/auth-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'admin',
                component: AdminComponent,
                canActivate: [AuthGuardService],
                children: [
                    {
                        path: '',
                        children: [
                            //   { path: 'component', component: Component },
                            //   { path: '', component: AdminDashboardComponent }
                        ],
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
