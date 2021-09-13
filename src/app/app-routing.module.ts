import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './portfolio/about-us/about-us.component';
import { BlogComponent } from './portfolio/blog/blog.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { HomepageComponent } from './portfolio/homepage/homepage.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:HomepageComponent
  },
  {
    path:'about',
    component:AboutUsComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
