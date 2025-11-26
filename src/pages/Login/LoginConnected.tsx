import { connect } from 'react-redux';
import { hasSetupBeenSuccessful, selectUser } from '@app/selectors';
import type { RootState } from '@app/store';
import { setupLoadThunk } from '@app/thunks';
import { Login } from './Login';

const mapStateToProps = (state: RootState) => {
  return {
    hasSetupBeenSuccessful: hasSetupBeenSuccessful(state),
    user: selectUser(state),
  };
};

const mapDispatchToProps = {
  setupLoad: setupLoadThunk,
};

export const LoginConnected = connect(mapStateToProps, mapDispatchToProps)(Login);
