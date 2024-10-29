import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CharacterInformationComponent } from './components/character-information/character-information.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

const routes: Routes = [
  {
    path: '', component:MenuBarComponent,
    children: [
      { path:'home', component:HomePageComponent},
      { path:'character/:id', component:CharacterInformationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
