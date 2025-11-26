import { connect } from 'react-redux';
import { RootState } from '@app/store';
import { userLoginThunk } from '@app/thunks';
import { LoginForm } from './LoginForm';

const mapStateToProps = (state: RootState) => {
  return {
    error: state.auth.error,
    isLoading: state.auth.status === 'pending',
    isAuthenticated: state.auth.entity !== null,
    user: state.auth.entity,
    theme: state.userInterface.theme,
  };
};

const mapDispatchToProps = {
  userLogin: userLoginThunk,
};

export const LoginFormConnected = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
