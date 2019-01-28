import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment.prod';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Fierbase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Services
import { KidService } from './services/kid.service';
import { ClassService } from './services/class.service';
import { ActiveService } from './services/active.service';
import { DailyeventService } from './services/dailyevent.service';

// Components
import { AppComponent } from './app.component';
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
import { DailyeventsComponent } from './Activity/dailyevents/dailyevents.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'viewkids', component: HomeComponent },
  { path: 'viewkids/:id', component: ViewkidsComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'selectclass', component: SelectclassComponent },
  { path: 'selectclass/:CGUID', component: ActiveformComponent },
  { path: 'dailyevents/:CGUID', component: DailyeventsComponent },
  // { path: 'loading-spinner', component: LoadingSpinnerComponent },



  // Must be last component
  { path: '**', component: PageNotFoundComponent }
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
    ViewkidsComponent,
    NewkidsListComponent,
    NewkidDetailComponent,
    NewkidFormComponent,
    SelectclassComponent,
    ActiveformComponent,
    DailyeventsComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
    // BrowserAnimationsModule
  ],
  providers: [KidService, ClassService, ActiveService, DailyeventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
