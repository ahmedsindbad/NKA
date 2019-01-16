import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

// Fierbase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Services
import { KidService } from './services/kid.service';
import { ClassService } from './services/class.service';
import { ActiveService } from './services/active.service';

// Components
import { AppComponent } from './app.component';
import { AddkidComponent } from './kid/addkid/addkid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ViewkidsComponent } from './Kid/viewkids/viewkids.component';
import { NewkidsListComponent } from './newkid/newkids-list/newkids-list.component';
import { NewkidDetailComponent } from './newkid/newkid-detail/newkid-detail.component';
import { NewkidFormComponent } from './newkid/newkid-form/newkid-form.component';
import { SelectclassComponent } from './Activity/selectclass/selectclass.component';
import { ActiveformComponent } from './Activity/activeform/activeform.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'viewkids', component: HomeComponent },
  { path: 'viewkids/:id', component: ViewkidsComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addkid', component: AddkidComponent },
  { path: 'selectclass', component: SelectclassComponent },
  { path: 'selectclass/:CGUID', component: ActiveformComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ApplicationComponent,
    LearnComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    AddkidComponent,
    ViewkidsComponent,
    NewkidsListComponent,
    NewkidDetailComponent,
    NewkidFormComponent,
    SelectclassComponent,
    ActiveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [KidService, ClassService, ActiveService],
  bootstrap: [AppComponent]
})
export class AppModule {}
