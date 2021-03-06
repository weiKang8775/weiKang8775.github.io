import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { LayoutModule } from "@angular/cdk/layout"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutesModule } from './app-routes.module';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillItemComponent } from './skills/skill-item/skill-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    SkillItemComponent,
    NavigationComponent,
    ContactComponent,
    ProjectsComponent,
    ProjectComponent,
    TutorialComponent,
    MobileNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutesModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
