import { useDispatch } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { AllActions } from '../services/store/actions';

export const useActions = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  return bindActionCreators(AllActions, dispatch);
};
