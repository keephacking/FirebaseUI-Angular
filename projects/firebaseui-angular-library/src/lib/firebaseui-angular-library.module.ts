import {ModuleWithProviders, NgModule} from '@angular/core';
import {FirebaseuiAngularLibraryComponent} from './firebaseui-angular-library.component';
import {CommonModule} from '@angular/common';
import {FirebaseUIAuthConfig, NativeFirebaseUIAuthConfig} from './firebaseui-angular-library.helper';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirebaseuiAngularLibraryComponent],
  exports: [FirebaseuiAngularLibraryComponent]
})
export class FirebaseUIModule {
  static forRoot(firebaseUiAuthConfig: NativeFirebaseUIAuthConfig | FirebaseUIAuthConfig): ModuleWithProviders {
    return {
      ngModule: FirebaseUIModule,
      providers: [
        {provide: 'firebaseUIAuthConfig', useValue: firebaseUiAuthConfig}
      ]
    };
  }
}
