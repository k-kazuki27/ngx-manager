import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guard/auth.guard';

const routes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled', // ブラウザバックしたときに遷移前のスクロール位置に復元する
      anchorScrolling: 'enabled' // アンカーリンク有効
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
