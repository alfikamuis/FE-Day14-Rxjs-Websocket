import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ArticleComponent } from './components/article/article.component';
import { CreateComponent } from './components/article/create/create.component';
import { EditComponent } from './components/article/edit/edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewComponent } from './components/view/view.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '', redirectTo:"/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'view/:id/:nama/:kota', component: ViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'create-article', component: CreateComponent},
  {path: 'edit-article/:id', component: EditComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
