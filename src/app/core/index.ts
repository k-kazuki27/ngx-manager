import * as LoginActions from './ngrx/actions/login.actions';
import * as fromLogin from './ngrx/reducers/auth';
import * as fromRoot from './ngrx/reducers/root';

export * from './core.module';
export { fromRoot, LoginActions, fromLogin };
