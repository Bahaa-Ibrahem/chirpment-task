import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './ViewModels/product/product.component';
import { NotfoundComponent } from './LayoutComponent/notfound/notfound.component';

const routes: Routes = [
  {path:"home",component:ProductComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
