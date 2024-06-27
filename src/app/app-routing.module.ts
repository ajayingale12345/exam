import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatagoriesComponent } from 'src/pages/admin/add-catagories/add-catagories.component';
import { AddQuizeComponent } from 'src/app/add-quize/add-quize.component';
import { DashboardComponent } from 'src/pages/admin/dashboard/dashboard.component';
import { ShowQuizesComponent } from 'src/pages/admin/show-quizes/show-quizes.component';
import { ViewCatagoriesComponent } from 'src/pages/admin/view-catagories/view-catagories.component';

import { HomeComponent } from 'src/pages/home/home.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { ProfileComponent } from 'src/pages/profile/profile.component';
import { SignupComponent } from 'src/pages/signup/signup.component';
import { UserDashboardComponent } from 'src/pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { UpdateQuizeComponent } from 'src/pages/admin/update-quize/update-quize.component';
import { ViewQuizeQuestionsComponent } from '../pages/admin/view-quize-questions/view-quize-questions.component';
import { AddQuestionsComponent } from 'src/pages/admin/add-questions/add-questions.component';
import { LoadQuizeComponent } from 'src/pages/user/load-quize/load-quize.component';
import { InstructionsComponent } from 'src/pages/user/instructions/instructions.component';
import { StartComponent } from 'src/pages/user/start/start.component';



const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full'
  }
  , {
    path:'admin',
    component: DashboardComponent,
  
    canActivate:[AdminGuard],
    children:[
     {
      path:'profile',
      component: ProfileComponent
    },
    {
      path:'catagories',
      component:ViewCatagoriesComponent,
    },
    {
      path:'add-category',
      component:AddCatagoriesComponent,
    },
    {
      path:'add-quize',
      component:AddQuizeComponent,
    },
    {
      path:'quizes',
      component:ShowQuizesComponent,
    },
    {
      path:'quize/:qid',
      component:UpdateQuizeComponent,
    },
    {
      path:'view-questions/:qid/:title',
      component:ViewQuizeQuestionsComponent,
    },
    {
      path:'add-question/:qid/:title',
      component:AddQuestionsComponent,
    }
  ]
  }
  , {
    path:'user',
    component: UserDashboardComponent,
 
    canActivate:[NormalGuard],
    children:[
      {
        path:':catId',
        component: LoadQuizeComponent,
      },
      {
        path:':instructions/:qid',
        component: InstructionsComponent,
      },
    
    ]
    
  },
  {
    path:'start/:qid',
    component: StartComponent,
    canActivate:[NormalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }