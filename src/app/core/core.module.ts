import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { environment } from '../../environments/environment';
import { LoginEffects } from './ngrx/effects/login.effects';
import { reducers } from './ngrx/reducers/auth';
import { metaReducers, rootReducers } from './ngrx/reducers/root';

@NgModule({
  imports: [
    /**
    * StoreModule.forRoot is imported once in the root module, accepting a reducer
    * function or object map of reducer functions. If passed an object of
    * reducers, combineReducers will be run creating your application
    * meta-reducer. This returns all providers for an @ngrx/store
    * based application.
    */
    StoreModule.forRoot(rootReducers, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot(),

    /**
      * Store devtools instrument the store retaining past versions of state
      * and recalculating new states. This enables powerful time-travel
      * debugging.
      *
      * To use the debugger, install the Redux Devtools extension for either
      * Chrome or Firefox
      *
      * See: https://github.com/zalmoxisus/redux-devtools-extension
      */
    StoreDevtoolsModule.instrument({
      name: 'NgRx App',
      logOnly: environment.production,
    }),

    /**
    * EffectsModule.forRoot() is imported once in the root module and
    * sets up the effects class to be initialized immediately when the
    * application starts.
    *
    * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
    */
    EffectsModule.forRoot([]),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffects]),
    AmplifyAngularModule
  ],
  exports: [],
  providers: [AmplifyService],
  declarations: [],
  entryComponents: []
})

/**
 * コアモジュール
 * Angularアプリで一度だけ呼ばれるモジュール
 * https://angular.io/guide/ngmodule#the-core-module
 */
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
