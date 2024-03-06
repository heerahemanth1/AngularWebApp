import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'article/:id', component: ArticleComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: AuthComponent },
    { path: 'register', component: AuthComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
