import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'orders',
  children: [
    {
      path: '',
   loadChildren: './orders/orders.module#OrdersPageModule'
   },

  {  path: ':OrderId', loadChildren: './orders/order-detail/order-detail.module#OrderDetailPageModule'
 },
]
},
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
