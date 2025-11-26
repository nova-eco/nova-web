import { connect } from 'react-redux';
import { setTheme } from '@app/actions';
import { RootState } from '@app/store';
import ThemeToggle from './ThemeToggle';

interface StateProps {
  theme: 'light' | 'dark';
}

interface DispatchProps {
  onToggle: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  theme: state.userInterface.theme,
});

const mapDispatchToProps = (_dispatch: any): DispatchProps => {
  return {
    onToggle: () => console.log('TO BE IMPLEMENTED'),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
