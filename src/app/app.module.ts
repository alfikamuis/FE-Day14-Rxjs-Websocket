import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { PassangerComponent } from './components/passanger/passanger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import { UpdateComponent } from './components/update/update.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { CreateComponent } from './components/article/create/create.component';
import { EditComponent } from './components/article/edit/edit.component';
import { RegisterComponent } from './components/register/register.component';
import { PublishService } from './services/publish.service';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { CardModule, } from 'primeng/card';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthInterceptor } from './shared/authconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddEditComponent,
    PassangerComponent,
    ViewComponent,
    UpdateComponent,
    HomeComponent,
    LoginComponent,
    ArticleComponent,
    CreateComponent,
    EditComponent,
    RegisterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AccordionModule,
    CardModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    DataService,ArticleService,PublishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
