import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './portfolio/homepage/homepage.component';
import { NavbarComponent } from './portfolio/homepage/navbar/navbar.component';
import { SocialIconComponent } from './portfolio/homepage/social-icon/social-icon.component';
import { AboutUsComponent } from './portfolio/about-us/about-us.component';
import { BlogComponent } from './portfolio/blog/blog.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { UiBlogComponent } from './ui-blog/ui-blog.component';
import { MyskillComponent } from './portfolio/homepage/myskill/myskill.component';
import { ProjectsComponent } from './portfolio/homepage/projects/projects.component';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SocialIconComponent,
    AboutUsComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    UiBlogComponent,
    MyskillComponent,
    ProjectsComponent,
    
  
   
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
