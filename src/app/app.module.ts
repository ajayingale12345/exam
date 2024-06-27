import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from '../pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from '../pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { AuthInterceptorProviders } from './services/auth.interceptors';
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from '../pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { SidebarComponent } from '../pages/admin/sidebar/sidebar.component';

import { ViewCatagoriesComponent } from 'src/pages/admin/view-catagories/view-catagories.component';
import { AddCatagoriesComponent } from '../pages/admin/add-catagories/add-catagories.component';
import { ShowQuizesComponent } from '../pages/admin/show-quizes/show-quizes.component';
import { AddQuizeComponent } from './add-quize/add-quize.component';
import { UpdateQuizeComponent } from '../pages/admin/update-quize/update-quize.component';
import { ViewQuizeQuestionsComponent } from '../pages/admin/view-quize-questions/view-quize-questions.component';
import { AddQuestionsComponent } from '../pages/admin/add-questions/add-questions.component';
import { LoadQuizeComponent } from '../pages/user/load-quize/load-quize.component';
import { UserSidebarComponent } from '../pages/user/user-sidebar/user-sidebar.component';
import { InstructionsComponent } from '../pages/user/instructions/instructions.component';
import { StartComponent } from 'src/pages/user/start/start.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';








@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
   HomeComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    ViewCatagoriesComponent,
    AddCatagoriesComponent,
    ShowQuizesComponent,
    AddQuizeComponent,
    UpdateQuizeComponent,
    ViewQuizeQuestionsComponent,
    AddQuestionsComponent,
    LoadQuizeComponent,
    UserSidebarComponent,
    InstructionsComponent,
  StartComponent
      
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,MaterialModule,
    FormsModule,HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
