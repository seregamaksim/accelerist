import { AnyAction, Dispatch } from 'redux';
import { REHYDRATE } from 'redux-persist';
import { http } from '../../services/http';
import { signUpPost } from '../auth/thunks';

import { actions } from '../ducks';

export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    if (
      action.type === actions.auth.signInSuccess.type ||
      action.type === signUpPost.fulfilled.type
    ) {
      console.log('have token', action.payload?.accessToken);

      action.payload?.token &&
        http.setAuthorizationHeader(action.payload.token);
    }

    if (action.type === REHYDRATE) {
      action.payload?.auth?.token &&
        http.setAuthorizationHeader(action.payload.auth.token);
    }

    if (action.type === actions.auth.signOut.type) {
      console.log('aw');

      http.unsetAuthorizationHeader();
    }

    return next(action);
  };
