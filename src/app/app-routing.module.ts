import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { TotalComponent } from './total/total.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, children:[
    {path:'',redirectTo:'image',pathMatch:'full'},
    { path: 'image', component: ImageComponent},
    {path: '', component: TableComponent, outlet:'table'},
    {path: '', component: TotalComponent, outlet:'pie-graph'},
  ] },
  { path: 'login', component: LoginComponent },
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'*',redirectTo:'error',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
