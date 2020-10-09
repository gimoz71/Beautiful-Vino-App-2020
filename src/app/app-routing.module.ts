import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    /*{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},*/

    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'cambio-password',
        loadChildren: () => import('./pages/cambio-password/cambio-password.module').then(m => m.CambioPasswordPageModule)
    },
    {
        path: 'registrati',
        loadChildren: () => import('./pages/registrati/registrati.module').then(m => m.RegistratiPageModule)
    },
    {
        path: 'eventi',
        loadChildren: () => import('./pages/eventi/eventi.module').then(m => m.EventiPageModule)
    },
    {
        path: 'scopri',
        loadChildren: () => import('./pages/scopri/scopri.module').then(m => m.ScopriPageModule)
    },
    {
        path: 'profilo',
        loadChildren: () => import('./pages/profilo/profilo.module').then(m => m.ProfiloPageModule)
    },
    {
        path: 'vini',
        loadChildren: () => import('./pages/vini/vini.module').then(m => m.ViniPageModule)
    },
    {
        path: 'dettaglio-evento',
        loadChildren: () => import('./pages/dettaglio-evento/dettaglio-evento.module').then(m => m.DettaglioEventoPageModule)
    },
    {
        path: 'dettaglio-feed',
        loadChildren: () => import('./pages/dettaglio-feed/dettaglio-feed.module').then(m => m.DettaglioFeedPageModule)
    },
    {
        path: 'dettaglio-azienda',
        loadChildren: () => import('./pages/dettaglio-azienda/dettaglio-azienda.module').then(m => m.DettaglioAziendaPageModule)
    },
    {
        path: 'dettaglio-vino',
        loadChildren: () => import('./pages/dettaglio-vino/dettaglio-vino.module').then(m => m.DettaglioVinoPageModule)
    },
    {
        path: 'edit-profilo',
        loadChildren: () => import('./pages/edit-profilo/edit-profilo.module').then(m => m.EditProfiloPageModule)
    },
    {
        path: 'acquistaevento',
        loadChildren: () => import('./pages/acquistaevento/acquistaevento.module').then(m => m.AcquistaeventoPageModule)
    },
  {
    path: 'cambio-password',
    loadChildren: () => import('./pages/cambio-password/cambio-password.module').then( m => m.CambioPasswordPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
