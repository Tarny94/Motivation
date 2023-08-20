import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { InputComponent } from './model/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ChallengePageComponent } from './pages/challenge-page/challenge-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginPageComponent } from './pages/authentication/login-page/login-page.component';
import { ChallangePageComponent } from './model/challange-page/challange-page.component';
import { TaskPageComponent } from './model/task-page/task-page.component';
import { HistoryChallengesComponent } from './model/history-challenges/history-challenges.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    InputComponent,
    ChallengePageComponent,
    LoginPageComponent,
    ChallangePageComponent,
    TaskPageComponent,
    HistoryChallengesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
