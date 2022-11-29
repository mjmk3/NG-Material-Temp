import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./layout/main/main.component";
import {BoardComponent} from "./layout/board/board.component";

const routes: Routes = [
  { path:'', redirectTo:'main', pathMatch:'full' },
  { path:'main', component:MainComponent },
  { path:'board', component:BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
