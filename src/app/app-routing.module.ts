import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sample-page1',
    loadChildren: () => import('./pages/sample-page1/sample-page1.module').then( m => m.SamplePage1PageModule)
  },
  {
    path: 'sample-page12',
    loadChildren: () => import('./pages/sample-page12/sample-page12.module').then( m => m.SamplePage12PageModule)
  },
  {
    path: 'sample-page13',
    loadChildren: () => import('./pages/sample-page13/sample-page13.module').then( m => m.SamplePage13PageModule)
  },
  {
    path: 'sample-page14',
    loadChildren: () => import('./pages/sample-page14/sample-page14.module').then( m => m.SamplePage14PageModule)
  },
  {
    path: 'sample-page15',
    loadChildren: () => import('./pages/sample-page15/sample-page15.module').then( m => m.SamplePage15PageModule)
  },
  {
    path: 'sample-page16',
    loadChildren: () => import('./pages/sample-page16/sample-page16.module').then( m => m.SamplePage16PageModule)
  },
  {
    path: 'exercise7',
    loadChildren: () => import('./pages/exercise7/exercise7.module').then( m => m.Exercise7PageModule)
  },
  {
    path: 'sample-page17',
    loadChildren: () => import('./pages/sample-page17/sample-page17.module').then( m => m.SamplePage17PageModule)
  },
  {
    path: 'sample-page18',
    loadChildren: () => import('./pages/sample-page18/sample-page18.module').then( m => m.SamplePage18PageModule)
  },
  {
    path: 'sample-page19',
    loadChildren: () => import('./pages/sample-page19/sample-page19.module').then( m => m.SamplePage19PageModule)
  },
  {
    path: 'sample-page20',
    loadChildren: () => import('./pages/sample-page20/sample-page20.module').then( m => m.SamplePage20PageModule)
  },
  {
    path: 'sample-page21',
    loadChildren: () => import('./pages/sample-page21/sample-page21.module').then( m => m.SamplePage21PageModule)
  },
  {
    path: 'sample-page23',
    loadChildren: () => import('./pages/sample-page23/sample-page23.module').then( m => m.SamplePage23PageModule)
  },
  {
    path: 'exercise1',
    loadChildren: () => import('./pages/exercise1/exercise1.module').then( m => m.Exercise1PageModule)
  },
  {
    path: 'exercise2',
    loadChildren: () => import('./pages/exercise2/exercise2.module').then( m => m.Exercise2PageModule)
  },
  {
    path: 'exercise3',
    loadChildren: () => import('./pages/exercise3/exercise3.module').then( m => m.Exercise3PageModule)
  },
  {
    path: 'exercise4',
    loadChildren: () => import('./pages/exercise4/exercise4.module').then( m => m.Exercise4PageModule)
  },
  {
    path: 'exercise5',
    loadChildren: () => import('./pages/exercise5/exercise5.module').then( m => m.Exercise5PageModule)
  },
  {
    path: 'exercise6',
    loadChildren: () => import('./pages/exercise6/exercise6.module').then( m => m.Exercise6PageModule)
  },
  {
    path: 'exercise9',
    loadChildren: () => import('./pages/exercise9/exercise9.module').then( m => m.Exercise9PageModule)
  },
  {
    path: 'sample-page2',
    loadChildren: () => import('./pages/sample-page2/sample-page2.module').then( m => m.SamplePage2PageModule)
  },
  {
    path: 'sample-page3',
    loadChildren: () => import('./pages/sample-page3/sample-page3.module').then( m => m.SamplePage3PageModule)
  },
  {
    path: 'sample-page4',
    loadChildren: () => import('./pages/sample-page4/sample-page4.module').then( m => m.SamplePage4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
