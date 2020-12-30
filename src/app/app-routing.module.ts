import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentAddComponent } from './content-add/content-add.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/AuthGuard.service';
import { SliderComponent } from './slider/slider.component';

const appRoutes: Routes = [
    {path: '', component: SliderComponent},
    {path: 'content', component: ContentComponent, canActivate: [AuthGuard]},
    {path: 'content/:id', component: ContentDetailComponent, canActivate: [AuthGuard]},
    {path: 'add', component: ContentAddComponent, canActivate: [AuthGuard]},
    {path: 'content/edit/:id', component: ContentAddComponent, canActivate: [AuthGuard]},
    {path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
