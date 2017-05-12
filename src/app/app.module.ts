import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { CreateUserComponent } from './components/user/create-user.component';
import { IndexUserComponent } from './components/user/index-user.component';
import { EditUserComponent } from './components/user/edit-user.component';

import { CreateClientComponent } from './components/client/create-client.component';
import { EditClientComponent } from './components/client/edit-client.component';
import { IndexClientComponent } from './components/client/index-client.component';
import { ModalComponent } from './components/modal/modal.component';

// component services
import { AuthService } from './services/auth.service';
import { ClientService } from './services/client.service';

// our services
import { Config } from './services/config.service';
import { ValidateService } from './services/validate.service';
import { ToolsService } from './services/tools.service';

// external services
import { SelectModule } from 'ng2-select';
// import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { DatePickerService } from './services/date-picker.service';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';


// import { User } from './models/user';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'index-user', component: IndexUserComponent},
  {path: 'edit-user/:id', component: EditUserComponent},
  {path: 'create-client', component: CreateClientComponent},
  {path: 'edit-client/:id', component: EditClientComponent},
  {path: 'index-client', component: IndexClientComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CreateUserComponent,
    IndexUserComponent,
    EditUserComponent,
    CreateClientComponent,
    EditClientComponent,
    IndexClientComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    SelectModule,
    MyDatePickerModule,
    NKDatetimeModule
    // ModalModule.forRoot(),
    // BootstrapModalModule
  ],
  providers: [ValidateService,
              ToolsService,
              DatePickerService,
              AuthService,
              ClientService,
              Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
