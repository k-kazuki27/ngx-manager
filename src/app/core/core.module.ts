import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  exports: [],
  declarations: []
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
