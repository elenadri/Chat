import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // QUIERO QUE EL GUARD SE ACTIVE EN HOME y LOGIN
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate: [NologinGuard] },
  { path: 'registro', loadChildren: './componentes/registro/registro.module#RegistroPageModule', canActivate: [NologinGuard] },
  { path: 'chat-add', loadChildren: './componentes/chat-add/chat-add.module#ChatAddPageModule' },
  { path: 'chat-add-image', loadChildren: './componentes/chat-add-image/chat-add-image.module#ChatAddImagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
